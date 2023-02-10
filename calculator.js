// compound interest calculator

const compoundInterest = (principal, rate, time) => {
    return Math.floor(principal * (1 + time) ** rate);
    }

module.exports = compoundInterest;

