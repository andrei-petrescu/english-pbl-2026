const surveyForm = document.querySelector("[data-survey-form]");

if (surveyForm) {
  const surveyFields = surveyForm.querySelectorAll("[data-survey-fields]");
  const submitButton = surveyForm.querySelector("[data-survey-submit]");
  const surveyStatus = surveyForm.querySelector("[data-survey-status]");

  if (surveyFields.length > 0 && submitButton && surveyStatus) {
    surveyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      surveyForm.reset();
      surveyStatus.hidden = false;
      surveyStatus.focus();
    });

    for (const fieldset of surveyFields) {
      fieldset.disabled = false;
    }
    submitButton.disabled = false;
  }
}
