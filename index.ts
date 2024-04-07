import inquirer from "inquirer";

type answers = {
    userId: String,
    pin: number,
    accType: String,
    options: String,
    cashAmount: number
}
let Input :answers  = await inquirer.prompt([
    {
        name: "userId",
        type: "string", 
        message: "Kindly Enter Your User ID: "
    },
    {
        name: "pin",
        type: "number",
        message: "Kindly Enter your PIN: ",
        when(answers) {
            return answers.userId;
        },
    },
    {
        name: "accType",
        type: "list",
        choices: ["Current Account", "Savings Account"],
        message: "Choose Account Type",
        when(answers) {
            return answers.pin
        },
    },
    {
        name: "options",
        type: "list",
        choices: ["Fast Cash", "Cash Withdraw"],
        message: "Choose given below: ",
        when(answers) {
            return answers.accType
        },
    },
    {
        name: "cashAmount",
        type: "list",
        choices: [1000, 3000, 5000, 10000],
        message: "Choose amount: ",
        when(answers) {
            return answers.options === "Fast Cash"
        },
    },
    {
        name: "cashAmount",
        type: "number",
        message: "Enter amount: ",
        when(answers) {
            return answers.options === "Cash Withdraw"
        },
    }
]);

const { userId, pin,cashAmount} = Input;

const Balance = Math.floor(Math.random() * 1000000)
if(userId && pin && cashAmount ){
    console.log(Balance)
    if(Balance > cashAmount){
        let CurrentBalance = Balance - cashAmount;
        console.log(`Transaction Successfu. \nYour CurrentBalance is ${CurrentBalance}`);
    } else {
        console.log("Insuficient Balance");
    }
}


