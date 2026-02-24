"use client";

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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
          <input
            type="text"
            placeholder="ایمیل یا شماره تلفن"
            className="w-full border border-gray-200 rounded-xl py-2 px-4 outline-none transition-all text-left placeholder:text-right"
            onChange={() => {}}
            required
          />

          <input
            placeholder="رمز عبور"
            className="w-full border border-gray-200 rounded-xl py-2 px-4 outline-none transition-all text-left placeholder:text-right"
            onChange={() => {}}
            required
          />

          <button
            type="submit"
            className="cursor-pointer w-full bg-gray-400 rounded-xl outline-none py-2 px-4 hover:bg-gray-200"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
