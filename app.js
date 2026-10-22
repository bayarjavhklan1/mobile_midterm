(() => {
  "use strict";

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  const QUIZ_LENGTH = 15;
  const questions = window.QUIZ_QUESTIONS ?? [];
  const translations = window.QUIZ_TRANSLATIONS_MN ?? {};
  const theoryUnits = window.THEORY_UNITS ?? [];

  const elements = {
    bankCount: document.querySelector("#bank-count"),
    theoryTab: document.querySelector("#theory-tab"),
    quizTab: document.querySelector("#quiz-tab"),
    theoryScreen: document.querySelector("#theory-screen"),
    quizScreen: document.querySelector("#quiz-screen"),
    resultScreen: document.querySelector("#result-screen"),
    languageButtons: document.querySelectorAll("[data-quiz-language]"),
    modeButtons: document.querySelectorAll("[data-quiz-mode]"),
    theoryProgressCount: document.querySelector("#theory-progress-count"),
    theoryProgressFill: document.querySelector("#theory-progress-fill"),
    unitNav: document.querySelector("#unit-nav"),
    unitNumber: document.querySelector("#unit-number"),
    unitTitle: document.querySelector("#unit-title"),
    unitSubtitle: document.querySelector("#unit-subtitle"),
    unitDescription: document.querySelector("#unit-description"),
    unitPathways: document.querySelector("#unit-pathways"),
    unitSource: document.querySelector("#unit-source"),
    unitSections: document.querySelector("#unit-sections"),
    previousUnit: document.querySelector("#previous-unit"),
    completeUnit: document.querySelector("#complete-unit"),
    progressLabel: document.querySelector("#progress-label"),
    answeredLabel: document.querySelector("#answered-label"),
    progressFill: document.querySelector("#progress-fill"),
    progressSteps: document.querySelector("#progress-steps"),
    topicLabel: document.querySelector("#topic-label"),
    questionType: document.querySelector("#question-type"),
    questionTitle: document.querySelector("#question-title"),
    selectionHint: document.querySelector("#selection-hint"),
    optionsForm: document.querySelector("#options-form"),
    answerFeedback: document.querySelector("#answer-feedback"),
    feedbackStatus: document.querySelector("#feedback-status"),
    feedbackAnswer: document.querySelector("#feedback-answer"),
    feedbackExplanation: document.querySelector("#feedback-explanation"),
    previousButton: document.querySelector("#previous-button"),
    checkButton: document.querySelector("#check-button"),
    nextButton: document.querySelector("#next-button"),
    restartButton: document.querySelector("#restart-button"),
    scoreRing: document.querySelector("#score-ring"),
    scorePercent: document.querySelector("#score-percent"),
    scoreFraction: document.querySelector("#score-fraction"),
    resultMessage: document.querySelector("#result-message"),
    correctCount: document.querySelector("#correct-count"),
    wrongCount: document.querySelector("#wrong-count"),
    bestScore: document.querySelector("#best-score"),
    reviewCount: document.querySelector("#review-count"),
    reviewList: document.querySelector("#review-list"),
    statusMessage: document.querySelector("#status-message"),
  };

  let quiz = [];
  let currentIndex = 0;
  let responses = new Map();
  let activeUnitIndex = 0;
  let showingResults = false;
  let quizLanguage = localStorage.getItem("quizLanguage") === "en" ? "en" : "mn";
  let quizMode = localStorage.getItem("quizMode") === "exam" ? "exam" : "practice";
  let checkedAnswers = new Set();

  const loadCompletedUnits = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("completedTheoryUnits") ?? "[]");
      return new Set(stored.filter((unitNumber) => Number.isInteger(unitNumber)));
    } catch {
      return new Set();
    }
  };

  const completedUnits = loadCompletedUnits();

  const shuffle = (items) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  };

  const arraysMatch = (left, right) => {
    if (left.length !== right.length) return false;
    const sortedLeft = [...left].sort((a, b) => a - b);
    const sortedRight = [...right].sort((a, b) => a - b);
    return sortedLeft.every((value, index) => value === sortedRight[index]);
  };

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const localizeQuestion = (question) => {
    if (quizLanguage === "en") return question;
    const translation = translations[question.id];
    return translation
      ? { ...question, prompt: translation.prompt, options: translation.options }
      : question;
  };

  const syncLanguageControls = () => {
    elements.languageButtons.forEach((button) => {
      const isActive = button.dataset.quizLanguage === quizLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const syncModeControls = () => {
    elements.modeButtons.forEach((button) => {
      const isActive = button.dataset.quizMode === quizMode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const isPracticeMode = () => quizMode === "practice";

  const scrollToContent = () => {
    const top = document.querySelector(".view-tabs").offsetTop - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const setActiveTab = (view) => {
    const theoryIsActive = view === "theory";
    elements.theoryTab.classList.toggle("is-active", theoryIsActive);
    elements.quizTab.classList.toggle("is-active", !theoryIsActive);
    elements.theoryTab.setAttribute("aria-selected", String(theoryIsActive));
    elements.quizTab.setAttribute("aria-selected", String(!theoryIsActive));
  };

  const showView = (view, { scroll = true } = {}) => {
    const theoryIsActive = view === "theory";
    setActiveTab(view);
    elements.theoryScreen.hidden = !theoryIsActive;
    elements.quizScreen.hidden = theoryIsActive || showingResults;
    elements.resultScreen.hidden = theoryIsActive || !showingResults;
    if (scroll) scrollToContent();
  };

  const saveTheoryProgress = () => {
    localStorage.setItem("completedTheoryUnits", JSON.stringify([...completedUnits]));
  };

  const renderTheoryProgress = () => {
    const completedCount = theoryUnits.filter((unit) => completedUnits.has(unit.number)).length;
    const percent = theoryUnits.length === 0 ? 0 : (completedCount / theoryUnits.length) * 100;
    elements.theoryProgressCount.textContent = `${completedCount} / ${theoryUnits.length}`;
    elements.theoryProgressFill.style.width = `${percent}%`;
  };

  const renderTheoryNav = () => {
    elements.unitNav.innerHTML = theoryUnits.map((unit, index) => {
      const isActive = index === activeUnitIndex;
      const isCompleted = completedUnits.has(unit.number);
      return `
        <button
          class="unit-nav-button${isActive ? " is-active" : ""}"
          type="button"
          data-unit-index="${index}"
          aria-current="${isActive ? "page" : "false"}"
        >
          <span class="unit-nav-number">U${unit.number}</span>
          <span class="unit-nav-title">${escapeHtml(unit.title)}</span>
          <span class="unit-nav-check" aria-label="${isCompleted ? "Уншсан" : "Уншаагүй"}">${isCompleted ? "✓" : ""}</span>
        </button>
      `;
    }).join("");

    elements.unitNav.querySelectorAll("[data-unit-index]").forEach((button) => {
      button.addEventListener("click", () => {
        activeUnitIndex = Number(button.dataset.unitIndex);
        renderTheoryUnit();
        scrollToContent();
      });
    });
  };

  const renderTheorySections = (unit) => {
    elements.unitSections.innerHTML = unit.sections.map((section, index) => {
      const paragraphs = (section.paragraphs ?? [])
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("");
      const bullets = section.bullets?.length
        ? `<ul>${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>`
        : "";
      const code = section.code
        ? `
          <div class="code-block">
            <div class="code-label">${escapeHtml(section.codeLanguage ?? "Kotlin")}</div>
            <pre><code>${escapeHtml(section.code)}</code></pre>
          </div>
        `
        : "";
      const note = section.note
        ? `<div class="theory-note"><strong>Анхаарах нь:</strong> ${escapeHtml(section.note)}</div>`
        : "";

      return `
        <section class="theory-section">
          <span class="theory-section-number">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${escapeHtml(section.title ?? "Нэмэлт ойлголт")}</h3>
            ${paragraphs}
            ${bullets}
            ${code}
            ${note}
          </div>
        </section>
      `;
    }).join("");
  };

  const renderTheoryUnit = () => {
    const unit = theoryUnits[activeUnitIndex];
    const isLastUnit = activeUnitIndex === theoryUnits.length - 1;
    const isCompleted = completedUnits.has(unit.number);

    elements.unitNumber.textContent = `Unit ${unit.number}`;
    elements.unitTitle.textContent = unit.title;
    elements.unitSubtitle.textContent = unit.subtitle;
    elements.unitDescription.textContent = unit.description;
    elements.unitPathways.innerHTML = unit.pathways
      .map((pathway) => `<span class="pathway-tag">${escapeHtml(pathway)}</span>`)
      .join("");
    elements.unitSource.href = unit.source;
    elements.previousUnit.disabled = activeUnitIndex === 0;
    elements.completeUnit.innerHTML = isLastUnit
      ? `${isCompleted ? "Дахин тест өгөх" : "Онол дуусгах · Тест өгөх"} <span aria-hidden="true">→</span>`
      : `${isCompleted ? "Дараагийн unit" : "Уншиж дууссан"} <span aria-hidden="true">→</span>`;

    renderTheorySections(unit);
    renderTheoryNav();
    renderTheoryProgress();
    elements.statusMessage.textContent = `Unit ${unit.number}. ${unit.title}.`;
  };

  function renderQuestion() {
    const question = quiz[currentIndex];
    const displayQuestion = localizeQuestion(question);
    const selected = responses.get(question.id) ?? [];
    const answeredCount = responses.size;
    const isChecked = checkedAnswers.has(question.id);

    elements.progressLabel.textContent = quizLanguage === "mn"
      ? `Асуулт ${currentIndex + 1} / ${quiz.length}`
      : `Question ${currentIndex + 1} / ${quiz.length}`;
    elements.answeredLabel.textContent = quizLanguage === "mn"
      ? `${answeredCount} хариулсан`
      : `${answeredCount} answered`;
    elements.progressFill.style.width = `${((currentIndex + 1) / quiz.length) * 100}%`;
    elements.topicLabel.textContent = question.topic;
    elements.questionType.textContent = quizLanguage === "mn"
      ? (question.multiple ? "Олон хариулт" : "Нэг хариулт")
      : (question.multiple ? "Multiple answers" : "Single answer");
    elements.questionTitle.textContent = displayQuestion.prompt;
    elements.selectionHint.textContent = quizLanguage === "mn"
      ? (isPracticeMode() ? "Зөв гэж үзсэн бүх хариултаа сонгоод шалгана уу." : "Нэгээс олон зөв хариулттай.")
      : (isPracticeMode() ? "Select every correct answer, then check it." : "Choose all correct answers.");
    elements.selectionHint.hidden = !question.multiple;
    elements.previousButton.disabled = currentIndex === 0;
    elements.checkButton.hidden = !isPracticeMode() || !question.multiple || isChecked;
    elements.checkButton.disabled = selected.length === 0;
    elements.nextButton.disabled = isPracticeMode() ? !isChecked : selected.length === 0;
    elements.nextButton.innerHTML = currentIndex === quiz.length - 1
      ? `${quizLanguage === "mn" ? "Үр дүн харах" : "View result"} <span aria-hidden="true">✓</span>`
      : `${quizLanguage === "mn" ? "Дараах" : "Next"} <span aria-hidden="true">→</span>`;

    elements.optionsForm.innerHTML = displayQuestion.options.map((option, optionIndex) => {
      const isSelected = selected.includes(optionIndex);
      const isCorrectOption = question.answers.includes(optionIndex);
      const inputType = question.multiple ? "checkbox" : "radio";
      const classes = ["option"];
      if (isSelected) classes.push("is-selected");
      if (isPracticeMode() && isChecked && isCorrectOption) classes.push("is-correct");
      if (isPracticeMode() && isChecked && isSelected && !isCorrectOption) classes.push("is-wrong");
      if (isChecked) classes.push("is-locked");
      return `
        <label class="${classes.join(" ")}">
          <input type="${inputType}" name="answer" value="${optionIndex}" ${isSelected ? "checked" : ""} ${isChecked ? "disabled" : ""} />
          <span class="option-key">${optionIndex + 1}</span>
          <span class="option-text">${escapeHtml(option)}</span>
        </label>
      `;
    }).join("");

    elements.optionsForm.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", handleAnswerChange);
    });

    renderAnswerFeedback(question, displayQuestion, selected, isChecked);
    renderProgressSteps();
    elements.statusMessage.textContent = `${currentIndex + 1}-р асуулт. ${question.topic}.`;
  }

  const renderAnswerFeedback = (question, displayQuestion, selected, isChecked) => {
    const shouldShow = isPracticeMode() && isChecked;
    elements.answerFeedback.hidden = !shouldShow;
    if (!shouldShow) return;

    const isCorrect = arraysMatch(selected, question.answers);
    const correctText = question.answers
      .map((answer) => displayQuestion.options[answer])
      .join(", ");

    elements.answerFeedback.classList.toggle("is-correct", isCorrect);
    elements.answerFeedback.classList.toggle("is-wrong", !isCorrect);
    elements.feedbackStatus.textContent = isCorrect
      ? (quizLanguage === "mn" ? "Зөв хариуллаа" : "Correct")
      : (quizLanguage === "mn" ? "Буруу хариуллаа" : "Incorrect");
    elements.feedbackAnswer.textContent = `${quizLanguage === "mn" ? "Зөв хариу" : "Correct answer"}: ${correctText}`;
    elements.feedbackExplanation.textContent = `Тайлбар: ${question.explanation}`;
  };

  const resetQuiz = () => {
    quiz = isPracticeMode()
      ? [...questions]
      : shuffle(questions).slice(0, Math.min(QUIZ_LENGTH, questions.length));
    currentIndex = 0;
    responses = new Map();
    checkedAnswers = new Set();
    showingResults = false;
    syncModeControls();
    renderQuestion();
  };

  const startQuiz = () => {
    resetQuiz();
    showView("quiz");
  };

  const renderProgressSteps = () => {
    elements.progressSteps.hidden = isPracticeMode();
    if (isPracticeMode()) {
      elements.progressSteps.innerHTML = "";
      return;
    }

    elements.progressSteps.innerHTML = quiz.map((question, index) => {
      const classes = ["progress-step"];
      if (responses.has(question.id)) classes.push("is-answered");
      if (index === currentIndex) classes.push("is-current");
      return `<button class="${classes.join(" ")}" type="button" data-step="${index}" aria-label="${index + 1}-р асуулт"></button>`;
    }).join("");

    elements.progressSteps.querySelectorAll("[data-step]").forEach((button) => {
      button.addEventListener("click", () => {
        currentIndex = Number(button.dataset.step);
        renderQuestion();
      });
    });
  };

  const handleAnswerChange = () => {
    const question = quiz[currentIndex];
    const selected = [...elements.optionsForm.querySelectorAll("input:checked")]
      .map((input) => Number(input.value));

    if (selected.length > 0) responses.set(question.id, selected);
    else responses.delete(question.id);

    if (isPracticeMode() && !question.multiple && selected.length > 0) {
      checkedAnswers.add(question.id);
    }

    renderQuestion();
  };

  const checkCurrentAnswer = () => {
    const question = quiz[currentIndex];
    if (!responses.has(question.id)) return;
    checkedAnswers.add(question.id);
    renderQuestion();
  };

  const moveNext = () => {
    const question = quiz[currentIndex];
    if (!responses.has(question.id)) return;
    if (isPracticeMode() && !checkedAnswers.has(question.id)) return;

    if (currentIndex < quiz.length - 1) {
      currentIndex += 1;
      renderQuestion();
      return;
    }

    const unansweredIndex = quiz.findIndex((item) => !responses.has(item.id));
    if (unansweredIndex !== -1) {
      currentIndex = unansweredIndex;
      renderQuestion();
      elements.statusMessage.textContent = "Хариулаагүй асуулт руу шилжлээ.";
      return;
    }

    showResults();
  };

  const messageForScore = (percent) => {
    if (percent === 100) return "Бүх асуултад зөв хариуллаа. Маш сайн бэлтгэгдсэн байна.";
    if (percent >= 80) return "Сайн үр дүн. Доорх цөөн сэдвийг давтаад улам бататгаарай.";
    if (percent >= 60) return "Суурь ойлголт сайн байна. Буруу хариултын тайлбарыг нэг удаа нягтлаарай.";
    return "Давтах сэдвүүд тодорхой боллоо. Тайлбарыг уншаад дахин оролдоорой.";
  };

  const showResults = ({ scroll = true } = {}) => {
    const results = quiz.map((question) => {
      const selected = responses.get(question.id) ?? [];
      return { question, selected, correct: arraysMatch(selected, question.answers) };
    });
    const correct = results.filter((result) => result.correct).length;
    const wrong = results.filter((result) => !result.correct);
    const percent = Math.round((correct / quiz.length) * 100);
    const bestScoreKey = isPracticeMode() ? "kotlinQuizBestPractice" : "kotlinQuizBestExam";
    const previousBest = Number(localStorage.getItem(bestScoreKey) ?? 0);
    const best = Math.max(previousBest, correct);

    localStorage.setItem(bestScoreKey, String(best));
    showingResults = true;
    setActiveTab("quiz");
    elements.theoryScreen.hidden = true;
    elements.quizScreen.hidden = true;
    elements.resultScreen.hidden = false;
    elements.scoreRing.style.setProperty("--score", percent);
    elements.scorePercent.textContent = `${percent}%`;
    elements.scoreFraction.textContent = `${correct} / ${quiz.length}`;
    elements.resultMessage.textContent = messageForScore(percent);
    elements.correctCount.textContent = correct;
    elements.wrongCount.textContent = wrong.length;
    elements.bestScore.textContent = `${best}/${quiz.length}`;
    elements.restartButton.innerHTML = isPracticeMode()
      ? '178 асуултыг дахин эхлэх <span aria-hidden="true">↻</span>'
      : 'Шинэ 15 асуулт <span aria-hidden="true">↻</span>';
    elements.reviewCount.textContent = wrong.length === 0 ? "Алдаа байхгүй" : `${wrong.length} тайлбар`;

    if (wrong.length === 0) {
      elements.reviewList.innerHTML = `
        <div class="perfect-result">
          <h3>${quiz.length}-аас ${quiz.length}</h3>
          <p>Энэ удаагийн бүх асуултад зөв хариулсан тул давтах алдаа алга.</p>
        </div>
      `;
    } else {
      elements.reviewList.innerHTML = wrong.map(({ question, selected }, index) => {
        const displayQuestion = localizeQuestion(question);
        const selectedText = selected.map((answer) => displayQuestion.options[answer]).join(", ");
        const correctText = question.answers.map((answer) => displayQuestion.options[answer]).join(", ");
        return `
          <article class="review-item">
            <span class="review-topic">${index + 1}. ${escapeHtml(question.topic)}</span>
            <h3 class="review-question">${escapeHtml(displayQuestion.prompt)}</h3>
            <div class="answer-row">
              <span class="answer-label">Таны хариу</span>
              <span class="answer-value is-wrong">${escapeHtml(selectedText || "Хариулаагүй")}</span>
            </div>
            <div class="answer-row">
              <span class="answer-label">Зөв хариу</span>
              <span class="answer-value is-correct">${escapeHtml(correctText)}</span>
            </div>
            <p class="explanation"><strong>Яагаад?</strong> ${escapeHtml(question.explanation)}</p>
          </article>
        `;
      }).join("");
    }

    if (scroll) scrollToContent();
    elements.statusMessage.textContent = `Шалгалт дууслаа. ${quiz.length}-аас ${correct} зөв.`;
  };

  elements.theoryTab.addEventListener("click", () => showView("theory"));
  elements.quizTab.addEventListener("click", () => showView("quiz"));

  elements.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      quizLanguage = button.dataset.quizLanguage;
      localStorage.setItem("quizLanguage", quizLanguage);
      syncLanguageControls();

      if (showingResults) showResults({ scroll: false });
      else renderQuestion();
    });
  });

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextMode = button.dataset.quizMode;
      if (nextMode === quizMode) return;
      quizMode = nextMode;
      localStorage.setItem("quizMode", quizMode);
      resetQuiz();
      showView("quiz", { scroll: false });
    });
  });

  elements.previousUnit.addEventListener("click", () => {
    if (activeUnitIndex === 0) return;
    activeUnitIndex -= 1;
    renderTheoryUnit();
    scrollToContent();
  });

  elements.completeUnit.addEventListener("click", () => {
    const unit = theoryUnits[activeUnitIndex];
    completedUnits.add(unit.number);
    saveTheoryProgress();

    if (activeUnitIndex === theoryUnits.length - 1) {
      renderTheoryProgress();
      startQuiz();
      return;
    }

    activeUnitIndex += 1;
    renderTheoryUnit();
    scrollToContent();
  });

  elements.previousButton.addEventListener("click", () => {
    if (currentIndex === 0) return;
    currentIndex -= 1;
    renderQuestion();
  });

  elements.nextButton.addEventListener("click", moveNext);
  elements.checkButton.addEventListener("click", checkCurrentAnswer);
  elements.restartButton.addEventListener("click", startQuiz);

  document.addEventListener("keydown", (event) => {
    if (elements.quizScreen.hidden) return;

    const number = Number(event.key);
    if (number >= 1 && number <= quiz[currentIndex].options.length) {
      const input = elements.optionsForm.querySelector(`input[value="${number - 1}"]`);
      if (input) {
        input.click();
        event.preventDefault();
      }
    }

    if (event.key === "Enter") {
      if (!elements.checkButton.hidden && !elements.checkButton.disabled) checkCurrentAnswer();
      else if (!elements.nextButton.disabled) moveNext();
      event.preventDefault();
    }
  });

  if (
    questions.length < QUIZ_LENGTH
    || theoryUnits.length !== 7
    || Object.keys(translations).length !== questions.length
  ) {
    document.body.innerHTML = "<p>Онол эсвэл асуултын өгөгдөл дутуу байна. Өгөгдлийн файлуудаа шалгана уу.</p>";
    return;
  }

  elements.bankCount.textContent = questions.length;
  syncLanguageControls();
  syncModeControls();
  renderTheoryUnit();
  resetQuiz();
  showView("theory", { scroll: false });
  window.scrollTo({ top: 0, behavior: "auto" });
})();
