"use strict";
const server = require("./dist/server/server");
const debug  = require("debug")("express:server");
const http   = require("http");

const httpPort = 8080;
const app      = server.Server.bootstrap().app;

app.set("port", httpPort);

const httpServer = http.createServer(app);
httpServer.listen(httpPort);

// 에러 핸들러 추가
httpServer.on("error", onError);

// 서버가 바인딩될 때 호출
httpServer.on("listening", onListening);

// 에러 핸들러
onError((error) => {
    if(error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof httpPort === "string" ? "Pipe " + httpPort : "Port " + httpPort;

    // 에러가 발생하면 에러 코드에 따라 에러 메시지 출력
    switch(error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
})

// 서버가 바인딩 될 때 호출
onListening(() => {
    const addr = httpServer.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.info("Listening on " + bind);
})