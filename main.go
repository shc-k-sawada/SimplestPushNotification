package main

import (
	"fmt"
	server "simplestPushNotification/internal"

	"github.com/joho/godotenv"
)

func main() {
	loadEnv()
	server.InitServer()
}

func loadEnv() {
	if err := godotenv.Load(".env"); err != nil {
		fmt.Printf("failed to load environment variables: %v", err)
		panic(err)
	}
}
