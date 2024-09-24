/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

// The initialize function must be run each time a new page is loaded
Office.onReady(() => {
  document.getElementById("sideload-msg").style.display = "none";
  document.getElementById("app-body").style.display = "flex";
  document.getElementById("run").onclick = run;
  document.getElementById("detail").onclick = addStockDetail;
});

export async function run() {
  try {
    await fillInTableContent();
  } catch (error) {
    console.error(error);
  }
}

export async function fillInTableContent() {
  changeBackgroundColorGradually("H2:M11");
  // H
  await addNetIncomes();
  await sleepRandomly(0.5, 0.1);
  // I
  await addEPS();
  await sleepRandomly(0.5, 0.1);
  // J
  await addPERatio();
  await sleepRandomly(0.5, 0.1);
  // K
  await addForwardedPE();
  await sleepRandomly(0.5, 0.1);
  // L
  await addTargetPrice();
  await sleepRandomly(0.5, 0.1);
  // M
  await addCurrentPrice();
  await sleepRandomly(0.5, 0.1);
  // // N
  // await addOperationSuggestion();

  let currentPriceBaseData = [116, 238, 191, 163, 435, 217, 561, 88, 228, 226];
  await addConditionalFormattingForColumn("$M", currentPriceBaseData);

  let currentForwardedPEBaseData = [34.31, 85, 37, 20, 33, 21, 24, 9, 31, 25];
  await addConditionalFormattingForColumn("$K", currentForwardedPEBaseData);
}

async function addConditionalFormattingForColumn(column, data) {
  for (let i = 0; i < data.length; i++) {
    await setConditionalFormaating(column + "$" + (i + 2), data[0]);
  }
}

async function changeBackgroundColorGradually(rangeAddress) {
  const steps = 20; // Number of steps for the transition
  const interval = 100; // Interval in milliseconds between each step

  // Function to interpolate between two colors
  function interpolateColor(color1, color2, factor) {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
    }
    return result;
  }

  // Convert hex color to RGB array
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }

  const deepGreen = hexToRgb("#CAEAD8");
  const white = hexToRgb("#FFFFFF");

  for (let step = 0; step <= steps; step++) {
    const factor = step / steps;
    const currentColor = interpolateColor(deepGreen, white, factor);
    const colorHex = `#${currentColor.map((c) => c.toString(16).padStart(2, "0")).join("")}`;

    await Excel.run(async (context) => {
      const sheet = context.workbook.worksheets.getActiveWorksheet();
      const range = sheet.getRange(rangeAddress);
      range.format.fill.color = colorHex;
      await context.sync();
    });

    await new Promise((resolve) => setTimeout(resolve, interval));
  }
}

export async function addCurrentPrice() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let column = await fillInColumnData(
    [
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETCURRENTPRICE([@[Stock Ticker]])"],
    ],
    "Current Price"
  );
}

export async function addNetIncomes() {
  await fillInColumnData(
    [
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
      ["=CONTOSO.GETNETINCOME([@[Stock Ticker]])"],
    ],
    "Net Incomes (ttm)"
  );
}

export async function addEPS() {
  await fillInColumnData(
    [
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
      ["=CONTOSO.GETEPS([@[Stock Ticker]])"],
    ],
    "EPS"
  );
}

export async function addPERatio() {
  await fillInColumnData(
    [
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
      ["=CONTOSO.GETPERATIO([@[Stock Ticker]])"],
    ],
    "PE ratio"
  );
}

export async function addForwardedPE() {
  await fillInColumnData(
    [
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
      ["=CONTOSO.GETFORWARDPE([@[Stock Ticker]])"],
    ],
    "Forwarded PE"
  );
}

export async function addTargetPrice() {
  await fillInColumnData(
    [
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
      ["=CONTOSO.GETARGETPRICE([@[Stock Ticker]])"],
    ],
    "Target Price"
  );
}

export async function addOperationSuggestion() {
  await fillInColumnData(
    [
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
      [
        "=CONTOSO.GETOPERATIONSUGGESTION([@[Stock Ticker]], [@[Net Incomes (ttm)]], [@[EPS]], [@[PE ratio]], [@[Forwarded PE]])",
      ],
    ],
    "Analysis"
  );
}

export async function fillInColumnData(data, columnName) {
  await Excel.run(async (context) => {
    let tables = context.workbook.worksheets.getActiveWorksheet().tables;
    tables.load("items");
    await context.sync();
    let table = tables.getItemAt(0);
    let columns = table.columns.load("items");
    await context.sync();

    // let column = table.columns.add(-1, data, columnName);
    var columnIndex = -1;
    columns.items.forEach((column, index) => {
      if (column.name === columnName) {
        columnIndex = index;
      }
    });

    if (columnIndex === -1) {
      throw new Error(`Column '${columnName}' not found.`);
    }

    // Step 3: Fill in the data for each row in the identified column
    let column = columns.getItemAt(columnIndex);
    var columnRange = column.getDataBodyRange();
    columnRange.values = data;
    await context.sync();

    column.getRange().format.autofitColumns();
    column.getRange().format.autofitRows();
    column.getRange().conditionalFormats.clearAll();
    await context.sync();
  });
}

export async function onTickerSelected(context, stockTickerColumnIndex, address) {
  let currentSheet = context.workbook.worksheets.getActiveWorksheet();
  var range = context.workbook.getSelectedRange();
  range.load(["columnIndex", "rowIndex", "values"]);

  await context.sync();
  // Step 4: Check if the activated cell is in the "Stock ticker" column
  if (range.columnIndex === stockTickerColumnIndex && range.rowIndex <= 3 && range.rowIndex > 0) {
    // Step 5: Trigger the event if the condition is met
    console.log("Stock ticker cell activated: ", range.values[0][0]);
    let anchor = currentSheet.getRange("B15");
    anchor.values = [[`=${address}`]];
    await context.sync();
  }
}

export async function addStockDetail() {
  await addTicker();
  await sleepRandomly(0.5);
  await addRevenueHistory();
  await addMarketCapHistory();
}

export async function addTicker() {
  await Excel.run(async (context) => {
    let currentSheet = context.workbook.worksheets.getActiveWorksheet();
    // Step 1: Add title
    let anchor = currentSheet.getRange("A15");
    // anchor.load("values");
    // await context.sync();
    // if (anchor.values[0][0] == "Ticker") {
    //   return;
    // }
    anchor.values = [["Ticker"]];
    anchor.format.font.color = "black";
    anchor.format.font.bold = true;
    await context.sync();

    // Step 2: Add event to talbe cell (Column ticker)
    currentSheet.load("tables");
    await context.sync();
    let tables = currentSheet.tables;
    tables.load("*");
    await context.sync();
    let table = tables.getItemAt(0);
    table.load("columns, rows");
    await context.sync();
    let columns = table.columns;
    columns.load("items");
    await context.sync();

    var stockTickerColumnIndex = -1;
    columns.items.forEach(function (column, index) {
      if (column.name === "Stock Ticker") {
        stockTickerColumnIndex = index;
      }
    });

    if (stockTickerColumnIndex === -1) {
      throw new Error("Column 'Stock Ticker' not found.");
    }

    // Step 3: Add an event handler to the worksheet to detect cell activation
    currentSheet.onSelectionChanged.add(async function (event) {
      await onTickerSelected(context, stockTickerColumnIndex, event.address);
    });
  });
}

export async function addRevenueHistory() {
  await Excel.run(async (context) => {
    let anchor = context.workbook.worksheets.getActiveWorksheet().getRange("A16");
    anchor.values = [["Revenues (Last 20 quarters)"]];
    anchor.format.font.color = "black";
    anchor.format.font.bold = true;
    await context.sync();

    let formular = context.workbook.worksheets.getActiveWorksheet().getRange("A17");
    formular.values = [["=CONTOSO.GETREVENUEHISTORY(B15)"]];
    await context.sync();
  });
}

export async function addMarketCapHistory() {
  await Excel.run(async (context) => {
    let anchor = context.workbook.worksheets.getActiveWorksheet().getRange("G16");
    anchor.values = [["Market Caps (Last 20 quarters)"]];
    anchor.format.font.color = "black";
    anchor.format.font.bold = true;
    await context.sync();

    let formular = context.workbook.worksheets.getActiveWorksheet().getRange("G17");
    formular.values = [["=CONTOSO.GETMARKETCAPHISTORY(B15)"]];
    await context.sync();
  });
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

async function setConditionalFormaating(rangeStr, base) {
  return Excel.run(async function (context) {
    // Step 1: Load the Excel workbook and worksheet
    var sheet = context.workbook.worksheets.getActiveWorksheet();

    // Step 2: Access the specific range of cells you want to apply conditional formatting to
    var range = sheet.getRange(rangeStr);
    range.conditionalFormats.clearAll();
    await context.sync();

    // Step 3: Add an icon set conditional format to the range
    var conditionalFormat = range.conditionalFormats.add(Excel.ConditionalFormatType.iconSet);

    // Step 4: Configure the icon set settings with the specified rules
    const iconSetCF = conditionalFormat.iconSet;
    iconSetCF.style = Excel.IconSet.threeTriangles;

    /*
        The iconSetCF.criteria array is automatically prepopulated with
        criterion elements whose properties have been given default settings.
        You can't write to each property of a criterion directly. Instead,
        replace the whole criteria object.

        With a "three*" icon set style, such as "threeTriangles", the third
        element in the criteria array (criteria[2]) defines the "top" icon;
        e.g., a green triangle. The second (criteria[1]) defines the "middle"
        icon. The first (criteria[0]) defines the "low" icon, but it
        can often be left empty as the following object shows, because every
        cell that does not match the other two criteria always gets the low
        icon.            
    */
    iconSetCF.criteria = [
      {},
      {
        type: Excel.ConditionalFormatIconRuleType.number,
        operator: Excel.ConditionalIconCriterionOperator.greaterThanOrEqual,
        formula: "=" + base,
      },
      {
        type: Excel.ConditionalFormatIconRuleType.number,
        operator: Excel.ConditionalIconCriterionOperator.greaterThanOrEqual,
        formula: "=" + Math.ceil(base * 1.1),
      },
    ];

    // Step 5: Sync the context to apply the changes
    await context.sync();
  }).catch(function (error) {
    console.log(error);
  });
}
