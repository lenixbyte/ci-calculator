// compound interest calculator

const compoundInterest = (principal, rate, time) => {
    return Math.floor(principal * (1 + rate) ** time);
    }

module.exports = compoundInterest;

