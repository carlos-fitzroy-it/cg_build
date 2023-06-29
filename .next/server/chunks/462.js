"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 8462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ runTerminalCommand)
/* harmony export */ });
const { exec  } = __webpack_require__(2081);
function runTerminalCommand(terminalCommand) {
    let commandResponse = {
        status: null,
        message: null
    };
    const promise = new Promise((resolve, reject)=>{
        exec(terminalCommand, (error, stdout, stderr)=>{
            if (error) {
                console.error(`error: ${error.message}`);
                commandResponse.status = 500;
                commandResponse.message = error;
                reject(commandResponse);
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                if (stderr.includes("/bin/sh: 1: cd: can't cd to")) {
                    commandResponse.status = 500;
                    commandResponse.message = `Command Line Error: ${stderr}`;
                    reject(commandResponse);
                } else if (stderr.includes("Switched to a new branch")) {
                    commandResponse.status = 200;
                    commandResponse.message = `Success!. ${stderr}`;
                    resolve(commandResponse);
                } else {
                    commandResponse.status = 307;
                    commandResponse.message = stderr;
                    resolve(commandResponse);
                }
            }
            if (!error && !stderr) {
                commandResponse.status = 200;
                commandResponse.message = `Success!. ${stdout}`;
                resolve(commandResponse);
            }
        });
    });
    return promise;
}


/***/ })

};
;