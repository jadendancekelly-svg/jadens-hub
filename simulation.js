// =====================================================
// JADEN'S HUB
// REAL-LIFE TERMINOLOGY SIMULATION
// VERSION 3
// =====================================================


// =====================================================
// SCENARIO DATABASE
// =====================================================

const scenarios = [

    // =================================================
    // BUSINESS
    // =================================================

    {
        category: "Business",

        situation:
            "You open a small computer repair company using your own money and make the major decisions yourself.",

        question:
            "What role are you taking on?",

        choices: [
            "Entrepreneur",
            "Stakeholder",
            "Creditor",
            "Consumer"
        ],

        answer: "Entrepreneur",

        explanation:
            "An entrepreneur creates and operates a business while taking on the risks involved. Jaden's Translation: You had the idea, started the business, and accepted the risk of whether it succeeds."
    },

    {
        category: "Business",

        situation:
            "A company is making a major decision. The decision could affect its employees, customers, owners, and suppliers.",

        question:
            "What are these people and groups called?",

        choices: [
            "Competitors",
            "Stakeholders",
            "Entrepreneurs",
            "Retailers"
        ],

        answer: "Stakeholders",

        explanation:
            "Stakeholders are people or groups that can affect or be affected by a business. Jaden's Translation: If what the company does can seriously matter to you, you have a stake in what happens."
    },

    {
        category: "Business",

        situation:
            "Your repair shop becomes popular because it completes repairs in one day while nearby competitors usually take a week.",

        question:
            "What has your faster service created?",

        choices: [
            "Competitive Advantage",
            "Liability",
            "Market Research",
            "Depreciation"
        ],

        answer: "Competitive Advantage",

        explanation:
            "A competitive advantage is something a business does better than its competitors that gives customers a reason to choose it. Jaden's Translation: You have something the other businesses don't, and it makes people choose you."
    },

    {
        category: "Business",

        situation:
            "A manager decides what needs to be accomplished, assigns employees different responsibilities, and checks whether the work gets completed.",

        question:
            "What business function is being demonstrated?",

        choices: [
            "Marketing",
            "Management",
            "Accounting",
            "Investing"
        ],

        answer: "Management",

        explanation:
            "Management involves planning, organizing, leading, and controlling resources to accomplish goals. Jaden's Translation: Somebody has to organize the people and the work so the plan actually happens."
    },

    {
        category: "Business",

        situation:
            "A new game console becomes extremely popular, but stores only have a small number available. Customers compete to buy the remaining consoles.",

        question:
            "Which basic business concept helps explain what is happening?",

        choices: [
            "Supply and Demand",
            "Depreciation",
            "Accounts Payable",
            "Market Segmentation"
        ],

        answer: "Supply and Demand",

        explanation:
            "Supply and demand describe the relationship between how much of something is available and how much consumers want it. Jaden's Translation: Everybody wants the console, but there aren't enough consoles for everybody."
    },


    // =================================================
    // ACCOUNTING
    // =================================================

    {
        category: "Accounting",

        situation:
            "You own a computer repair business. You purchase 20 replacement laptop screens that you plan to sell to customers.",

        question:
            "What would these laptop screens be considered?",

        choices: [
            "Revenue",
            "Inventory",
            "Liability",
            "Wages"
        ],

        answer: "Inventory",

        explanation:
            "Inventory is property a business owns because it plans to sell it or use it to provide products to customers. Jaden's Translation: These are products your business is holding onto until customers need them."
    },

    {
        category: "Accounting",

        situation:
            "You build a website for a customer and charge them $800. They haven't paid you yet, but they promise to pay next Friday.",

        question:
            "What is the $800 the customer owes your business called?",

        choices: [
            "Accounts Receivable",
            "Accounts Payable",
            "Inventory",
            "Depreciation"
        ],

        answer: "Accounts Receivable",

        explanation:
            "Accounts Receivable means money customers owe your business. Jaden's Translation: You did the work. They haven't paid you yet. That money is still coming."
    },

    {
        category: "Accounting",

        situation:
            "Your company orders $3,000 worth of computer equipment from a supplier. The supplier allows you to pay the bill next month.",

        question:
            "What does your company now have?",

        choices: [
            "Accounts Receivable",
            "Revenue",
            "Accounts Payable",
            "Equity"
        ],

        answer: "Accounts Payable",

        explanation:
            "Accounts Payable is money your business owes to another company. Jaden's Translation: They gave you the stuff already, but you still owe them."
    },

    {
        category: "Accounting",

        situation:
            "Your company earns $2,000 this week by repairing customers' computers.",

        question:
            "What is the money earned from providing those services called?",

        choices: [
            "Revenue",
            "Inventory",
            "Liability",
            "Depreciation"
        ],

        answer: "Revenue",

        explanation:
            "Revenue is money a business earns from its normal operations before expenses are subtracted. Jaden's Translation: This is the money the business brought in by doing its job."
    },

    {
        category: "Accounting",

        situation:
            "Your company buys a work computer for $2,000. As the computer gets older and is used over several years, its recorded value gradually decreases.",

        question:
            "What is this decrease called?",

        choices: [
            "Revenue",
            "Depreciation",
            "Accounts Receivable",
            "Inventory"
        ],

        answer: "Depreciation",

        explanation:
            "Depreciation spreads the cost of a long-term asset across its useful life. Jaden's Translation: The computer helps the business for years, so accounting gradually recognizes its cost instead of treating the whole thing like it disappeared on day one."
    },


    // =================================================
    // MARKETING
    // =================================================

    {
        category: "Marketing",

        situation:
            "You create an affordable study app designed specifically for college students who struggle with complicated professional terminology.",

        question:
            "What are the college students you designed the app for?",

        choices: [
            "Target Market",
            "Suppliers",
            "Creditors",
            "Shareholders"
        ],

        answer: "Target Market",

        explanation:
            "A target market is the specific group of consumers a company wants to reach. Jaden's Translation: These are the people you're actually trying to get to use or buy what you made."
    },

    {
        category: "Marketing",

        situation:
            "A clothing company separates potential customers into teenagers, college students, working adults, and retirees so it can market differently to each group.",

        question:
            "What is the company doing?",

        choices: [
            "Market Segmentation",
            "Depreciation",
            "Accounting",
            "Virtualization"
        ],

        answer: "Market Segmentation",

        explanation:
            "Market segmentation divides a larger market into smaller groups with shared characteristics. Jaden's Translation: Instead of treating everybody like the same customer, you split people into groups that make sense."
    },

    {
        category: "Marketing",

        situation:
            "Whenever people see a certain logo, slogan, color scheme, and style, they immediately recognize which company it belongs to.",

        question:
            "What has the company successfully developed?",

        choices: [
            "Branding",
            "Inventory",
            "Cloud Computing",
            "Accounts Payable"
        ],

        answer: "Branding",

        explanation:
            "Branding creates a recognizable identity and image for a company or product. Jaden's Translation: It's the look, personality, and feeling that makes people know it's you before they even read the company name."
    },

    {
        category: "Marketing",

        situation:
            "Before launching a new product, a company surveys hundreds of potential customers to learn what features they want and what price they would pay.",

        question:
            "What is the company conducting?",

        choices: [
            "Market Research",
            "Management",
            "Depreciation",
            "Virtualization"
        ],

        answer: "Market Research",

        explanation:
            "Market research gathers information about customers, competitors, and markets to help businesses make decisions. Jaden's Translation: Instead of guessing what people want, you actually ask and investigate."
    },

    {
        category: "Marketing",

        situation:
            "A restaurant pays for social media advertisements and gives customers limited-time coupons to encourage more people to visit.",

        question:
            "Which part of marketing is this?",

        choices: [
            "Promotion",
            "Accounting",
            "Production",
            "Virtualization"
        ],

        answer: "Promotion",

        explanation:
            "Promotion includes methods businesses use to communicate with customers and encourage purchases. Jaden's Translation: You're getting people's attention and giving them a reason to come buy something."
    },


    // =================================================
    // COMPUTER INFORMATION SYSTEMS
    // =================================================

    {
        category: "Computer Information Systems",

        situation:
            "A small company needs powerful servers but doesn't want to purchase and maintain physical servers in its own building. Instead, it rents computing resources over the internet.",

        question:
            "What is the company using?",

        choices: [
            "Cloud Computing",
            "Inventory",
            "Market Segmentation",
            "Accounts Payable"
        ],

        answer: "Cloud Computing",

        explanation:
            "Cloud computing provides computing resources such as servers, storage, and applications over a network, usually the internet. Jaden's Translation: Instead of owning the giant computer yourself, you're using somebody else's computing power when you need it."
    },

    {
        category: "Computer Information Systems",

        situation:
            "One powerful physical computer is configured to behave like several separate computers, each running its own operating system.",

        question:
            "What technology makes this possible?",

        choices: [
            "Virtualization",
            "Branding",
            "Depreciation",
            "Market Research"
        ],

        answer: "Virtualization",

        explanation:
            "Virtualization allows one physical computer to create multiple virtual computing environments. Jaden's Translation: One real computer is pretending to be several independent computers."
    },

    {
        category: "Computer Information Systems",

        situation:
            "A university uses the same physical network equipment but separates student devices, faculty devices, and administrative systems into different logical networks.",

        question:
            "What could the university use to create these separate networks?",

        choices: [
            "VLAN",
            "Inventory",
            "Revenue",
            "Target Market"
        ],

        answer: "VLAN",

        explanation:
            "A VLAN, or Virtual Local Area Network, logically separates devices into different networks even when they share physical networking equipment. Jaden's Translation: Everybody can use the same physical network hardware without everybody being placed in the same digital room."
    },

    {
        category: "Computer Information Systems",

        situation:
            "A university system stores thousands of student names, course registrations, grades, and IDs in an organized system where information can be searched and updated.",

        question:
            "What is this organized collection of information called?",

        choices: [
            "Database",
            "Hypervisor",
            "Promotion",
            "Revenue"
        ],

        answer: "Database",

        explanation:
            "A database is an organized collection of data designed so information can be stored, retrieved, and updated efficiently. Jaden's Translation: It's a structured place where a computer keeps lots of related information so it can actually find and use it later."
    },

    {
        category: "Computer Information Systems",

        situation:
            "A company uses firewalls, strong passwords, access controls, and monitoring systems to protect its computers and information from unauthorized access.",

        question:
            "What broader practice do these protections belong to?",

        choices: [
            "Cybersecurity",
            "Market Segmentation",
            "Accounting",
            "Supply and Demand"
        ],

        answer: "Cybersecurity",

        explanation:
            "Cybersecurity involves protecting systems, networks, and data from digital attacks and unauthorized access. Jaden's Translation: It's everything you do to keep people who aren't supposed to be in your digital stuff OUT of your digital stuff."
    }

];


// =====================================================
// GAME VARIABLES
// =====================================================

let currentScenario = 0;
let score = 0;

let selectedCategory = "";
let activeScenarios = [];


// =====================================================
// CONNECT JAVASCRIPT TO HTML
// =====================================================

// Screens

const menuScreen =
    document.getElementById("menu-screen");

const categoryScreen =
    document.getElementById("category-screen");

const gameScreen =
    document.getElementById("game-screen");

const resultsScreen =
    document.getElementById("results-screen");


// Main menu buttons

const startButton =
    document.getElementById("start-button");

const exitButton =
    document.getElementById("exit-button");


// Category buttons

const categoryButtons =
    document.querySelectorAll(".category-button");

const categoryMenuButton =
    document.getElementById("category-menu-button");


// Game elements

const categoryElement =
    document.getElementById("category");

const scenarioElement =
    document.getElementById("scenario");

const choicesElement =
    document.getElementById("choices");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("next-button");

const menuButton =
    document.getElementById("menu-button");

const scoreElement =
    document.getElementById("score");

const totalElement =
    document.getElementById("total");


// Results elements

const finalScoreElement =
    document.getElementById("final-score");

const playAgainButton =
    document.getElementById("play-again-button");

const chooseCategoryButton =
    document.getElementById("choose-category-button");

const resultsMenuButton =
    document.getElementById("results-menu-button");

const resultsExitButton =
    document.getElementById("results-exit-button");


// =====================================================
// SCREEN CONTROLS
// =====================================================

function hideAllScreens() {

    menuScreen.style.display = "none";
    categoryScreen.style.display = "none";
    gameScreen.style.display = "none";
    resultsScreen.style.display = "none";

}


function showMainMenu() {

    hideAllScreens();

    menuScreen.style.display = "block";

}


function showCategorySelection() {

    hideAllScreens();

    categoryScreen.style.display = "block";

}


function showGame() {

    hideAllScreens();

    gameScreen.style.display = "block";

}


function showResults() {

    hideAllScreens();

    resultsScreen.style.display = "block";

}


// =====================================================
// CHOOSE CATEGORY
// =====================================================

function selectCategory(category) {

    selectedCategory = category;


    // Mixed Mode uses questions from every category.
    if (selectedCategory === "Mixed") {

        activeScenarios = getMixedScenarios();

    }

    else {

        activeScenarios =
            scenarios.filter(function (scenario) {

                return scenario.category === selectedCategory;

            });

    }


    startSimulation();

}


// =====================================================
// CREATE MIXED CHALLENGE
// =====================================================

function getMixedScenarios() {

    // Make a copy so the original database is not changed.
    const shuffledScenarios = [...scenarios];


    // Shuffle the copied array.
    for (
        let i = shuffledScenarios.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));


        const temporaryScenario =
            shuffledScenarios[i];


        shuffledScenarios[i] =
            shuffledScenarios[randomIndex];


        shuffledScenarios[randomIndex] =
            temporaryScenario;

    }


    // Mixed Challenge gives the player 5 random questions.
    return shuffledScenarios.slice(0, 5);

}


// =====================================================
// START / RESTART GAME
// =====================================================

function startSimulation() {

    currentScenario = 0;
    score = 0;

    scoreElement.textContent = score;
    totalElement.textContent = 0;

    showGame();

    loadScenario();

}


// =====================================================
// LOAD A SCENARIO
// =====================================================

function loadScenario() {

    const scenario =
        activeScenarios[currentScenario];


    categoryElement.textContent =
        scenario.category;


    scenarioElement.innerHTML = `
        <h3>${scenario.situation}</h3>

        <p>
            ${scenario.question}
        </p>
    `;


    choicesElement.innerHTML = "";

    feedbackElement.innerHTML = "";

    nextButton.style.display = "none";


    totalElement.textContent =
        currentScenario + 1;


    scenario.choices.forEach(function (choice) {

        const button =
            document.createElement("button");


        button.textContent = choice;

        button.classList.add("choice-button");


        button.addEventListener(
            "click",
            function () {

                checkAnswer(choice);

            }
        );


        choicesElement.appendChild(button);

    });

}


// =====================================================
// CHECK ANSWER
// =====================================================

function checkAnswer(selectedAnswer) {

    const scenario =
        activeScenarios[currentScenario];


    if (selectedAnswer === scenario.answer) {

        score++;

        feedbackElement.innerHTML = `
            <div class="correct-feedback">

                <h3>Correct!</h3>

                <p>
                    ${scenario.explanation}
                </p>

            </div>
        `;

    }

    else {

        feedbackElement.innerHTML = `
            <div class="incorrect-feedback">

                <h3>Not quite!</h3>

                <p>
                    The correct answer is
                    <strong>${scenario.answer}</strong>.
                </p>

                <p>
                    ${scenario.explanation}
                </p>

            </div>
        `;

    }


    scoreElement.textContent = score;


    const buttons =
        choicesElement.querySelectorAll("button");


    buttons.forEach(function (button) {

        button.disabled = true;

    });


    nextButton.style.display = "block";

}


// =====================================================
// NEXT SCENARIO
// =====================================================

nextButton.addEventListener(
    "click",
    function () {

        currentScenario++;


        if (currentScenario < activeScenarios.length) {

            loadScenario();

        }

        else {

            endSimulation();

        }

    }
);


// =====================================================
// END SIMULATION
// =====================================================

function endSimulation() {

    let categoryName = selectedCategory;


    if (selectedCategory === "Mixed") {

        categoryName = "Mixed Challenge";

    }


    finalScoreElement.innerHTML = `
        <h3>${categoryName}</h3>

        <p>
            You scored
            <strong>${score}</strong>
            out of
            <strong>${activeScenarios.length}</strong>.
        </p>
    `;


    showResults();

}


// =====================================================
// MAIN MENU BUTTONS
// =====================================================

startButton.addEventListener(
    "click",
    function () {

        showCategorySelection();

    }
);


menuButton.addEventListener(
    "click",
    function () {

        showMainMenu();

    }
);


categoryMenuButton.addEventListener(
    "click",
    function () {

        showMainMenu();

    }
);


// =====================================================
// CATEGORY BUTTONS
// =====================================================

categoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const category =
                button.dataset.category;


            selectCategory(category);

        }
    );

});


// =====================================================
// RESULTS BUTTONS
// =====================================================

playAgainButton.addEventListener(
    "click",
    function () {

        // If Mixed Challenge is selected,
        // create a new random set of questions.
        if (selectedCategory === "Mixed") {

            activeScenarios = getMixedScenarios();

        }


        startSimulation();

    }
);


chooseCategoryButton.addEventListener(
    "click",
    function () {

        showCategorySelection();

    }
);


resultsMenuButton.addEventListener(
    "click",
    function () {

        showMainMenu();

    }
);


// =====================================================
// EXIT BUTTONS
// =====================================================

function exitSimulation() {

    window.location.href = "index.html";

}


exitButton.addEventListener(
    "click",
    function () {

        exitSimulation();

    }
);


resultsExitButton.addEventListener(
    "click",
    function () {

        exitSimulation();

    }
);


// =====================================================
// OPEN ON MAIN MENU
// =====================================================

showMainMenu();