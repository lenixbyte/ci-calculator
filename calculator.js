// compound interest calculator

const compoundInterest = (principal, rate, time) => {
    return Math.floor(principal * (1 + rate) ** time);
    }

const simpleInterest = (principal, rate, time) => {
    return (principal * rate * time)/100;
}

module.exports = {compoundInterest, simpleInterest};
