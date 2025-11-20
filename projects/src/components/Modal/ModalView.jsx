export default function ModalView({ onclose }) {
  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-cyan-900 text-white top-0 left-0">
        <div className="flex justify-end">
          <span
            onClick={onclose}
            className="w-14 h-14 rounded-lg bg-black text-white flex items-center justify-center"
          >
            &times;
          </span>
        </div>
        <h1 className="text-5xl text-center mt-32">Modal Body</h1>
      </div>
    </>
  );
}
