
export const KEY_CSV_WOLVOX = "csv-wolvox";
export const KEY_CSV_KIMBIL = "csv-kimbil";

const output_debug = true;

/**
 * Outputs all given arguments into console.log, if output_debug is true.
 */
export const debug = function () {
    if (!output_debug) {
        return;
    }
    let toLog = "";
    for (let arg of arguments) {
        toLog += " " + ((typeof arg === "string") ? arg : JSON.stringify(arg));
    }
    console.log(toLog);
};