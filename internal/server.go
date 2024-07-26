package server

import (
	"fmt"
	"net/http"
	"os"
)

func InitServer() {
	// NOTE: パス割りあて
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)

	IP := os.Getenv("IP")
	PORT := os.Getenv("PORT")
	server := http.Server{
		Addr: IP + ":" + PORT,
	}

	// NOTE: サーバー起動
	fmt.Printf("IP: %#v, Port: %#v でサーバー起動中...", IP, PORT)
	if err := server.ListenAndServe(); err != nil {
		fmt.Println(err)
	}
}
