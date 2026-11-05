// Jaden’s Hub Daily Quiz: local-calendar daily rotation and unlimited practice.
// Every visitor sees the same featured term for a given local calendar date.
// The next button moves through the question bank without changing the daily feature.
document.addEventListener('DOMContentLoaded', () => {
  const questions = [
  {
    "term": "Break-even",
    "correct": "A business earns enough to cover all its costs, without a profit or loss.",
    "wrong": [
      "A business sells all its inventory.",
      "A business has no employees."
    ]
  },
  {
    "term": "Revenue",
    "correct": "The total money a business brings in before expenses.",
    "wrong": [
      "The money remaining after every expense.",
      "The amount a business owes its lenders."
    ]
  },
  {
    "term": "Profit",
    "correct": "The money left after business expenses are subtracted from revenue.",
    "wrong": [
      "All money collected before paying costs.",
      "The total value of products in storage."
    ]
  },
  {
    "term": "Budget",
    "correct": "A plan for how money will be earned and spent.",
    "wrong": [
      "A record of customers who owe money.",
      "A list of products that are out of stock."
    ]
  },
  {
    "term": "Entrepreneur",
    "correct": "Someone who starts and runs a business, taking on risk.",
    "wrong": [
      "Someone who only audits business records.",
      "Someone who only purchases company shares."
    ]
  },
  {
    "term": "Marketing",
    "correct": "The work of understanding customers and promoting what a business offers.",
    "wrong": [
      "The process of repairing broken computers.",
      "The task of recording only employee hours."
    ]
  },
  {
    "term": "Target audience",
    "correct": "The group of people a product or message is meant to reach.",
    "wrong": [
      "Every company that sells similar products.",
      "The people who manufacture a product."
    ]
  },
  {
    "term": "Brand",
    "correct": "The identity and impression people associate with a business or product.",
    "wrong": [
      "The amount of cash in a register.",
      "The number of items sold in one day."
    ]
  },
  {
    "term": "Customer feedback",
    "correct": "Opinions and experiences customers share about a product or service.",
    "wrong": [
      "A list of business tax payments.",
      "The cost of shipping inventory."
    ]
  },
  {
    "term": "Supply and demand",
    "correct": "How product availability and buyer interest influence a market.",
    "wrong": [
      "How employees divide their work shifts.",
      "How companies choose their office furniture."
    ]
  },
  {
    "term": "Asset",
    "correct": "Something valuable that a person or business owns or controls.",
    "wrong": [
      "A payment owed to a supplier.",
      "A cost that must be paid every month."
    ]
  },
  {
    "term": "Liability",
    "correct": "A debt or obligation that a person or business owes.",
    "wrong": [
      "Money earned from selling products.",
      "A valuable item owned by a business."
    ]
  },
  {
    "term": "Depreciation",
    "correct": "The accounting process of spreading an asset’s cost over its useful life.",
    "wrong": [
      "A sudden increase in a product’s selling price.",
      "The act of paying every bill early."
    ]
  },
  {
    "term": "Variable cost",
    "correct": "A cost that changes as production or sales activity changes.",
    "wrong": [
      "A cost that stays exactly the same at every activity level.",
      "A cost that a business has already paid and cannot recover."
    ]
  },
  {
    "term": "Fixed cost",
    "correct": "A cost that generally stays the same within a relevant activity range.",
    "wrong": [
      "A cost that rises with every additional unit produced.",
      "A cost paid only when a customer requests a refund."
    ]
  },
  {
    "term": "Server",
    "correct": "A computer or program that provides data or services to other devices.",
    "wrong": [
      "A cable that carries only electricity.",
      "A screen used only to edit photographs."
    ]
  },
  {
    "term": "Cloud computing",
    "correct": "Using computing resources delivered over a network instead of relying only on local equipment.",
    "wrong": [
      "Saving all files only on a personal USB drive.",
      "Using a computer without any software installed."
    ]
  },
  {
    "term": "Database",
    "correct": "An organized collection of information that can be stored and retrieved.",
    "wrong": [
      "A type of monitor with extra brightness.",
      "A tool used only to design company logos."
    ]
  },
  {
    "term": "HTML",
    "correct": "The markup language used to structure content on web pages.",
    "wrong": [
      "The language used only to style colors and fonts.",
      "A service that automatically hosts websites."
    ]
  },
  {
    "term": "CSS",
    "correct": "The language used to control how web pages look and are laid out.",
    "wrong": [
      "The system that stores a company’s customer payments.",
      "The language used only to organize web page headings."
    ]
  },
  {
    "term": "JavaScript",
    "correct": "A programming language that can make web pages interactive.",
    "wrong": [
      "A format used only for storing photographs.",
      "A tool that replaces the need for HTML."
    ]
  },
  {
    "term": "Responsive design",
    "correct": "Designing a website to adapt to different screen sizes.",
    "wrong": [
      "Making every website load the same background image.",
      "Making a website available only on desktop computers."
    ]
  },
  {
    "term": "Accessibility",
    "correct": "Designing digital experiences so people with different abilities can use them.",
    "wrong": [
      "Restricting a website to registered employees.",
      "Reducing the number of pages in a website."
    ]
  },
  {
    "term": "Hyperlink",
    "correct": "A clickable connection to another page or resource.",
    "wrong": [
      "A file that stores only video recordings.",
      "A program that automatically fixes spelling errors."
    ]
  },
  {
    "term": "Cybersecurity",
    "correct": "Protecting computers, networks, and information from digital threats.",
    "wrong": [
      "Promoting products through social media.",
      "Designing the physical shape of a laptop."
    ]
  }
];
  const form = document.getElementById('daily-quiz-form');
  const heading = document.getElementById('quiz-question');
  const answers = document.getElementById('quiz-answers');
  const feedback = document.getElementById('quiz-feedback');
  const next = document.getElementById('next-quiz-question');
  const dayLabel = document.getElementById('quiz-day-label');
  if (!form || !heading || !answers || !feedback || !next) return;

  // A local calendar day, not 24 hours after a particular visitor opened the site.
  function localDayNumber() {
    const now = new Date();
    return Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
  }

  let dayNumber = localDayNumber();
  let offset = 0;
  let currentCorrect = 0;

  // Deterministic shuffle keeps choices mixed, even on reload.
  function shuffledChoices(question, seed) {
    const choices = [
      { text: question.correct, correct: true },
      ...question.wrong.map(text => ({ text, correct: false }))
    ];
    let state = (seed + 1) >>> 0;
    function random() {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      return state / 4294967296;
    }
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    return choices;
  }

  function render() {
    const questionIndex = ((dayNumber % questions.length) + offset) % questions.length;
    const question = questions[questionIndex];
    const choices = shuffledChoices(question, dayNumber * 31 + questionIndex * 101);
    currentCorrect = choices.findIndex(choice => choice.correct);
    heading.textContent = `What does “${question.term.toLowerCase()}” mean?`;
    if (dayLabel) dayLabel.textContent = offset === 0
      ? 'Today’s featured question · New question each calendar day'
      : `Extra practice · Question ${offset + 1}`;
    answers.replaceChildren();
    choices.forEach((choice, index) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'daily-answer';
      input.value = String(index);
      const span = document.createElement('span');
      span.textContent = choice.text;
      label.append(input, span);
      answers.append(label);
    });
    feedback.style.display = 'none';
    feedback.textContent = '';
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const selected = form.querySelector('input[name="daily-answer"]:checked');
    feedback.style.display = 'block';
    if (!selected) {
      feedback.textContent = 'Choose an answer first, then try again!';
    } else if (Number(selected.value) === currentCorrect) {
      feedback.textContent = 'That’s right! ' + questions[(dayNumber % questions.length + offset) % questions.length].correct;
    } else {
      feedback.textContent = 'Not quite! ' + questions[(dayNumber % questions.length + offset) % questions.length].correct + ' Try another question whenever you’re ready!';
    }
  });
  form.addEventListener('change', () => {
    feedback.style.display = 'none';
    feedback.textContent = '';
  });
  next.addEventListener('click', () => {
    offset = (offset + 1) % questions.length;
    render();
  });
  // If the page stays open across midnight, refresh its featured question.
  setInterval(() => {
    const today = localDayNumber();
    if (today !== dayNumber) {
      dayNumber = today;
      offset = 0;
      render();
    }
  }, 60000);
  render();
});
