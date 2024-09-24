/* eslint-disable @typescript-eslint/no-unused-vars */
/* global clearInterval, console, setInterval */

/**
 * Get net income (ttm) using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @returns {string} The net income (ttm)
 */
function getNetIncome(ticker) {
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return "53.10B";
  } else if (normalizedTicker == "tsla") {
    return "12.39B";
  } else if (normalizedTicker == "amzn") {
    return "44.42B";
  } else if (normalizedTicker == "googl") {
    return "87.66B";
  } else if (normalizedTicker == "msft") {
    return "88.14B";
  } else if (normalizedTicker == "ibm") {
    return "8.43B";
  } else if (normalizedTicker == "meta") {
    return "51.43B";
  } else if (normalizedTicker == "baba") {
    return "9.59B";
  } else if (normalizedTicker == "aapl") {
    return "101.96B";
  } else if (normalizedTicker == "crm") {
    return "5.63B";
  }

  throw "Unknow stock ticker";
}

/**
 * Get EPS (ttm) using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @returns {number} The EPS (ttm)
 */
function getEPS(ticker) {
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return 2.13;
  } else if (normalizedTicker == "tsla") {
    return 3.56;
  } else if (normalizedTicker == "amzn") {
    return 4.18;
  } else if (normalizedTicker == "googl") {
    return 6.97;
  } else if (normalizedTicker == "msft") {
    return 11.8;
  } else if (normalizedTicker == "ibm") {
    return 9.07;
  } else if (normalizedTicker == "meta") {
    return 19.51;
  } else if (normalizedTicker == "baba") {
    return 3.8;
  } else if (normalizedTicker == "aapl") {
    return 6.57;
  } else if (normalizedTicker == "crm") {
    return 5.74;
  }

  throw "Unknow stock ticker";
}

/**
 * Get PE Ratio using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @returns {number} The PE Ratio
 */
function getPERatio(ticker) {
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return 54.39;
  } else if (normalizedTicker == "tsla") {
    return 66.98;
  } else if (normalizedTicker == "amzn") {
    return 45.81;
  } else if (normalizedTicker == "googl") {
    return 23.48;
  } else if (normalizedTicker == "msft") {
    return 36.89;
  } else if (normalizedTicker == "ibm") {
    return 24.08;
  } else if (normalizedTicker == "meta") {
    return 28.78;
  } else if (normalizedTicker == "baba") {
    return 23.21;
  } else if (normalizedTicker == "aapl") {
    return 34.75;
  } else if (normalizedTicker == "crm") {
    return 46.45;
  }

  throw "Unknow stock ticker";
}

/**
 * Get Forward P/E using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
async function getForwardPE(ticker, invocation) {
  let refreshInterval = 3000;
  let openningPE;
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    openningPE = 34.31;
  } else if (normalizedTicker == "tsla") {
    openningPE = 85.06;
  } else if (normalizedTicker == "amzn") {
    openningPE = 37.11;
  } else if (normalizedTicker == "googl") {
    openningPE = 20.37;
  } else if (normalizedTicker == "msft") {
    openningPE = 33.08;
  } else if (normalizedTicker == "ibm") {
    openningPE = 21.5;
  } else if (normalizedTicker == "meta") {
    openningPE = 24.82;
  } else if (normalizedTicker == "baba") {
    openningPE = 9.74;
  } else if (normalizedTicker == "aapl") {
    openningPE = 31.53;
  } else if (normalizedTicker == "crm") {
    openningPE = 25.48;
  } else {
    throw "Unknown stock ticker";
  }

  let currentPE = openningPE;
  const timer = setInterval(async () => {
    if (Math.random() <= 0.8) {
      invocation.setResult(parseFloat(currentPE.toFixed(2)));
      return;
    }

    let isGrow = Math.random() >= 0.5;
    let delta = (Math.random() * currentPE) / 100;

    if (isGrow) {
      currentPE = currentPE + delta;
    } else {
      currentPE = currentPE - delta;
    }

    await sleepRandomly(1);
    invocation.setResult(parseFloat(currentPE.toFixed(2)));
  }, refreshInterval);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Get predicted target price using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
async function geTargetPrice(ticker, invocation) {
  let refreshInterval = 3000;
  let openningPrice = undefined;
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    openningPrice = 144.79;
  } else if (normalizedTicker == "tsla") {
    openningPrice = 207.51;
  } else if (normalizedTicker == "amzn") {
    openningPrice = 220.59;
  } else if (normalizedTicker == "googl") {
    openningPrice = 198.03;
  } else if (normalizedTicker == "msft") {
    openningPrice = 493.97;
  } else if (normalizedTicker == "ibm") {
    openningPrice = 187.79;
  } else if (normalizedTicker == "meta") {
    openningPrice = 569.05;
  } else if (normalizedTicker == "baba") {
    openningPrice = 105.9;
  } else if (normalizedTicker == "aapl") {
    openningPrice = 242.21;
  } else if (normalizedTicker == "crm") {
    openningPrice = 306;
  } else {
    throw "Unknow stock ticker";
  }

  let currentTarget = openningPrice;
  const timer = setInterval(async () => {
    if (Math.random() <= 0.8) {
      invocation.setResult(parseFloat(currentTarget.toFixed(2)));
      return;
    }

    let isGrow = Math.random() >= 0.5;
    let delta = (Math.random() * currentTarget) / 500;

    if (isGrow) {
      currentTarget = currentTarget + delta;
    } else {
      currentTarget = currentTarget - delta;
    }

    await sleepRandomly(1);
    invocation.setResult(parseFloat(currentTarget.toFixed(2)));
  }, refreshInterval);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Get operation suggestion using given symbols of a stock
 * @customfunction
 * @param {string} The stock ticker
 * @param {string} The Net Incomes
 * @param {number} The EPS
 * @param {number} The PE ratio
 * @param {number} The forwarded P/E
 * @returns {string} The operation suggestion
 */
function getOperationSuggestion(ticker, netInComes, eps, peRatio, forwardedPE) {
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    return "Strong Buy";
  } else if (normalizedTicker == "tsla") {
    return "Hold";
  } else if (normalizedTicker == "amzn") {
    return "Strong Buy";
  } else if (normalizedTicker == "googl") {
    return "Buy";
  } else if (normalizedTicker == "msft") {
    return "Strong Buy";
  } else if (normalizedTicker == "ibm") {
    return "Hold";
  } else if (normalizedTicker == "meta") {
    return "Strong Buy";
  } else if (normalizedTicker == "baba") {
    return "Strong Buy";
  } else if (normalizedTicker == "aapl") {
    return "Buy";
  } else if (normalizedTicker == "crm") {
    return "Buy";
  }

  throw "Unknow stock ticker";
}

/**
 * Get revenue history using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} The revenue history
 */
async function getRevenueHistory(ticker, invocation) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const address = invocation.address;
  let normalizedTicker = ticker.toLowerCase();
  let revenues = undefined;
  if (normalizedTicker == "nvda") {
    revenues = [
      ["Quarter Ended", "Revenue (B)", "Change (B)", "Growth"],
      ["07/28/2024", "30.04", "16.53", "122.40%"],
      ["04/28/2024", "26.04", "18.85", "262.12%"],
      ["01/28/2024", "22.10", "16.05", "265.28%"],
      ["10/29/2023", "18.12", "12.19", "205.51%"],
      ["07/30/2023", "13.51", "6.80", "101.48%"],
      ["04/30/2023", "7.19", "-1.10", "-13.22%"],
      ["01/29/2023", "6.05", "-1.59", "-20.83%"],
      ["10/30/2022", "5.93", "-1.17", "-16.50%"],
      ["07/31/2022", "6.70", "0.197", "3.03%"],
      ["05/01/2022", "8.29", "2.63", "46.41%"],
      ["01/30/2022", "7.64", "2.64", "52.77%"],
      ["10/31/2021", "7.10", "2.38", "50.30%"],
      ["08/01/2021", "6.51", "2.64", "68.31%"],
      ["05/02/2021", "5.66", "2.58", "83.80%"],
      ["01/31/2021", "5.00", "1.90", "61.13%"],
      ["10/25/2020", "4.73", "1.71", "56.80%"],
      ["07/26/2020", "3.87", "1.29", "49.90%"],
      ["04/26/2020", "3.08", "0.860", "38.74%"],
      ["01/26/2020", "3.11", "0.9", "40.82%"],
      ["10/27/2019", "3.01", "-0.167", "-5.25%"],
    ];
  } else if (normalizedTicker == "tsla") {
    revenues = [
      ["Quarter Ended", "Revenue (B)", "Change (B)", "Growth"],
      ["06/30/2024", "25.50", "0.573", "2.30%"],
      ["03/31/2024", "21.30", "-2.03", "-8.69%"],
      ["12/31/2023", "25.17", "0.849", "3.49%"],
      ["09/30/2023", "23.35", "1.90", "8.84%"],
      ["06/30/2023", "24.93", "7.99", "47.20%"],
      ["03/31/2023", "23.33", "4.57", "24.38%"],
      ["12/31/2022", "24.32", "6.60", "37.24%"],
      ["09/30/2022", "21.45", "7.70", "55.95%"],
      ["06/30/2022", "16.93", "4.98", "41.61%"],
      ["03/31/2022", "18.76", "8.37", "80.54%"],
      ["12/31/2021", "17.72", "6.98", "64.92%"],
      ["09/30/2021", "13.76", "4.99", "56.85%"],
      ["06/30/2021", "11.96", "5.92", "98.11%"],
      ["03/31/2021", "10.39", "4.40", "73.58%"],
      ["12/31/2020", "10.74", "3.36", "45.50%"],
      ["09/30/2020", "8.77", "2.47", "39.16%"],
      ["06/30/2020", "6.04", "-0.314", "-4.94%"],
      ["03/31/2020", "5.99", "1.44", "31.80%"],
      ["12/31/2019", "7.38", "0.158", "2.19%"],
      ["09/30/2019", "6.30", "-0.521", "-7.63%"],
    ];
  } else if (normalizedTicker == "amzn") {
    revenues = [
      ["Quarter Ended", "Revenue (B)", "Change (B)", "Growth"],
      ["06/30/2024", "147.98", "13.59", "10.12%"],
      ["03/31/2024", "143.31", "15.96", "12.53%"],
      ["12/31/2023", "169.96", "20.76", "13.91%"],
      ["09/30/2023", "143.08", "15.98", "12.57%"],
      ["06/30/2023", "134.38", "13.15", "10.85%"],
      ["03/31/2023", "127.36", "10.91", "9.37%"],
      ["12/31/2022", "149.20", "11.79", "8.58%"],
      ["09/30/2022", "127.10", "16.29", "14.70%"],
      ["06/30/2022", "121.23", "8.15", "7.21%"],
      ["03/31/2022", "116.44", "7.93", "7.30%"],
      ["12/31/2021", "137.41", "11.86", "9.44%"],
      ["09/30/2021", "110.81", "14.67", "15.26%"],
      ["06/30/2021", "113.08", "24.17", "27.18%"],
      ["03/31/2021", "108.52", "33.07", "43.82%"],
      ["12/31/2020", "125.56", "38.12", "43.60%"],
      ["09/30/2020", "96.15", "26.16", "37.39%"],
      ["06/30/2020", "88.91", "25.51", "40.23%"],
      ["03/31/2020", "75.45", "15.75", "26.39%"],
      ["12/31/2019", "87.44", "15.05", "20.80%"],
      ["09/30/2019", "69.98", "13.41", "23.69%"],
    ];
  }

  if (!revenues) {
    throw "Unknow stock ticker";
  }

  await sleepRandomly(2, 0.5);
  return revenues;
}

/**
 * Get revenue history using given stock ticker
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} The revenue history
 */
async function getMarketCapHistory(ticker, invocation) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const address = invocation.address;
  let marketCapData = undefined;
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    marketCapData = [
      ["Date", "Market Cap (B)", "Change"],
      ["09/30/2024", "2,010.95", "-0.01%"],
      ["06/30/2024", "2,011.08", "7.33%"],
      ["03/31/2024", "1,873.68", "19.33%"],
      ["12/31/2023", "1,570.15", "19.71%"],
      ["09/30/2023", "1,311.59", "-1.94%"],
      ["06/30/2023", "1,337.54", "26.37%"],
      ["03/31/2023", "1,058.44", "23.51%"],
      ["12/31/2022", "856.94", "-25.56%"],
      ["09/30/2022", "1,151.19", "6.53%"],
      ["06/30/2022", "1,080.62", "-34.86%"],
      ["03/31/2022", "1,658.81", "-1.90%"],
      ["12/31/2021", "1,691.00", "1.64%"],
      ["09/30/2021", "1,663.68", "-4.11%"],
      ["06/30/2021", "1,734.95", "11.35%"],
      ["03/31/2021", "1,558.07", "-4.66%"],
      ["12/31/2020", "1,634.16", "3.61%"],
      ["09/30/2020", "1,577.16", "14.62%"],
      ["06/30/2020", "1,376.03", "41.77%"],
      ["03/31/2020", "970.59", "5.94%"],
      ["12/31/2019", "916.15", "6.69%"],
    ];
  } else if (normalizedTicker == "tsla") {
    marketCapData = [
      ["Date", "Market Cap (B)", "Change"],
      ["09/30/2024", "761.12", "20.61%"],
      ["06/30/2024", "631.08", "12.72%"],
      ["03/31/2024", "559.85", "-29.12%"],
      ["12/31/2023", "789.90", "-0.54%"],
      ["09/30/2023", "794.20", "-4.28%"],
      ["06/30/2023", "829.68", "26.39%"],
      ["03/31/2023", "656.42", "68.76%"],
      ["12/31/2022", "388.97", "-53.20%"],
      ["09/30/2022", "831.15", "19.13%"],
      ["06/30/2022", "697.67", "-37.36%"],
      ["03/31/2022", "1,113.71", "4.94%"],
      ["12/31/2021", "1,061.29", "38.24%"],
      ["09/30/2021", "767.74", "17.25%"],
      ["06/30/2021", "654.78", "2.13%"],
      ["03/31/2021", "641.11", "-4.15%"],
      ["12/31/2020", "668.90", "67.33%"],
      ["09/30/2020", "399.75", "99.71%"],
      ["06/30/2020", "200.16", "110.65%"],
      ["03/31/2020", "95.02", "26.02%"],
      ["12/31/2019", "75.40", "74.76%"],
    ];
  } else if (normalizedTicker == "amzn") {
    marketCapData = [
      ["Date", "Market Cap (B)", "Change"],
      ["09/30/2024", "2,010.95", "-0.01%"],
      ["06/30/2024", "2,011.08", "7.33%"],
      ["03/31/2024", "1,873.68", "19.33%"],
      ["12/31/2023", "1,570.15", "19.71%"],
      ["09/30/2023", "1,311.59", "-1.94%"],
      ["06/30/2023", "1,337.54", "26.37%"],
      ["03/31/2023", "1,058.44", "23.51%"],
      ["12/31/2022", "856.94", "-25.56%"],
      ["09/30/2022", "1,151.19", "6.53%"],
      ["06/30/2022", "1,080.62", "-34.86%"],
      ["03/31/2022", "1,658.81", "-1.90%"],
      ["12/31/2021", "1,691.00", "1.64%"],
      ["09/30/2021", "1,663.68", "-4.11%"],
      ["06/30/2021", "1,734.95", "11.35%"],
      ["03/31/2021", "1,558.07", "-4.66%"],
      ["12/31/2020", "1,634.16", "3.61%"],
      ["09/30/2020", "1,577.16", "14.62%"],
      ["06/30/2020", "1,376.03", "41.77%"],
      ["03/31/2020", "970.59", "5.94%"],
      ["12/31/2019", "916.15", "6.69%"],
    ];
  }

  if (!marketCapData) {
    throw "Unknow stock ticker";
  }

  await sleepRandomly(2, 0.5);
  return marketCapData;
}

/**
 * Displays the current stock price in every 1 second
 * @customfunction
 * @param {string} The stock ticker
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function getCurrentPrice(ticker, invocation) {
  const refreshInterval = 1000;
  let openningPrice = 0;
  let normalizedTicker = ticker.toLowerCase();
  if (normalizedTicker == "nvda") {
    openningPrice = 116;
  } else if (normalizedTicker == "tsla") {
    openningPrice = 238.25;
  } else if (normalizedTicker == "amzn") {
    openningPrice = 191.6;
  } else if (normalizedTicker == "googl") {
    openningPrice = 163.59;
  } else if (normalizedTicker == "msft") {
    openningPrice = 435.27;
  } else if (normalizedTicker == "ibm") {
    openningPrice = 217.7;
  } else if (normalizedTicker == "meta") {
    openningPrice = 561.35;
  } else if (normalizedTicker == "baba") {
    openningPrice = 88.29;
  } else if (normalizedTicker == "aapl") {
    openningPrice = 228.2;
  } else if (normalizedTicker == "crm") {
    openningPrice = 266.8;
  } else {
    throw "Unknow stock ticker";
  }

  let currentPrice = openningPrice;
  const timer = setInterval(() => {
    let isGrow = Math.random() >= 0.5;
    let delta = (Math.random() * currentPrice) / 100;

    if (isGrow) {
      currentPrice = currentPrice + delta;
    } else {
      currentPrice = currentPrice - delta;
    }

    invocation.setResult(parseFloat(currentPrice.toFixed(2)));
  }, refreshInterval);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

async function sleepRandomly(prefer, min) {
  if (!prefer) {
    prefer = 3;
  }
  if (!min) {
    min = 0.5;
  }
  return new Promise((resolver) => {
    let timeSpan = Math.max(min, Math.random() * prefer);
    window.setTimeout(() => {
      resolver();
    }, timeSpan * 1000);
  });
}
