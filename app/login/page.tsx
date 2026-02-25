"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 1,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("نام کاربری یا رمز عبور اشتباه است.");
      }

      console.log(data);

      //   localStorage.setItem("accessToken", data.accessToken);
      document.cookie = `accessToken=${data.accessToken}; path=/; max-age=${1 * 60}`;

      router.push("/panel");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50 p-4"
      dir="rtl"
    >
      <div className=" bg-white w-full max-w-lg rounded-xl p-8 border border-gray-100 flex flex-col justify-center">
        <div className="">
          <h1 className="text-3xl text-gray-800 font-bold mb-8">
            ورود به حساب کاربری
          </h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {errorMessage && (
            <div className="bg-red-50 text-red-500 p-3 rounded-xl">
              {errorMessage}
            </div>
          )}

          <input
            type="text"
            placeholder="نام کاربری"
            //emilys
            value={username}
            className="w-full border border-gray-200 rounded-xl py-2 px-4 outline-gray-400 transition-all text-left placeholder:text-right"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />

          <input
            type="password"
            placeholder="رمز عبور"
            //emilyspass
            value={password}
            className="w-full border border-gray-200 rounded-xl py-2 px-4 outline-gray-400 transition-all text-left placeholder:text-right"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer w-full bg-gray-400 rounded-xl outline-none py-2 px-4 hover:bg-gray-500"
          >
            {isLoading ? "در حال ورود..." : "ورود"}
          </button>
        </form>
      </div>
    </div>
  );
}
