import { IMonthlyBilling } from "./IMonthlyBilling";

const monthlyBilling: IMonthlyBilling = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalRevenue = Object.values(monthlyBilling).reduce((acc, val) => acc + val, 0);

for (const state in monthlyBilling) {
    const percentage = (monthlyBilling[state] / totalRevenue) * 100;
    console.log(`${state} - ${percentage.toFixed(2)}%`);
}
