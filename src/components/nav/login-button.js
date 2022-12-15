import { useState } from "react";
import Modal from "../modal";

export default function LoginButton({ setAuth }) {
  const [show, setShow] = useState(null);

  return (
    <>
      <button
        className="px-4 py-2 border border-slate-100 rounded-full transition hover:bg-slate-100/10 active:bg-slate-100/20"
        onClick={() => setShow({ active: true, type: "account" })}
      >
        log in
      </button>

      <Modal show={show} setShow={setShow}>
        <h1 className="w-full text-xl font-semibold bg-transparent truncate focus:outline-none">
          log in.
        </h1>

        <form className="flex flex-col h-full justify-between items-center">
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-4">
              <input
                placeholder="username"
                className="px-4 py-2 text-slate-100 text-sm bg-slate-700/80 border border-slate-700 rounded-md transition hover:cursor-pointer hover:bg-slate-700 focus:outline-none focus-visible:bg-slate-700"
              />
              <input
                type="password"
                placeholder="password"
                className="px-4 py-2 text-slate-100 text-sm bg-slate-700/80 border border-slate-700 rounded-md transition hover:cursor-pointer hover:bg-slate-700 focus:outline-none focus-visible:bg-slate-700"
              />
            </div>

            <input
              type="submit"
              value="log in"
              className="px-4 py-2 text-slate-900 text-sm font-medium bg-slate-100 border border-slate-100 rounded-full transition hover:cursor-pointer hover:bg-slate-100/90 active:bg-slate-100/80"
              onClick={() => {
                setAuth(true);
                document.body.removeAttribute("style");
              }}
            />
          </div>

          <p className="text-xs font-semibold">noots. the only app.</p>
        </form>
      </Modal>
    </>
  );
}