export default function Home() {
  return (
    <main>
      <div className="
        h-screen 
        flex 
        justify-center 
        items-center 
        bg-slate-600 
        px-5
      ">
        <div className="
        bg-white
          p-12 
          rounded-lg 
          w-96 
          max-w-full 
          flex 
          flex-col 
          justify-center 
          items-center
          gap-2
        ">
          <h2 className="font-bold text-xl mb-3 text-slate-500">Faça login</h2>
          <input 
            type="email" 
            className="input input-primary bg-white w-full" 
            placeholder="Email" 
          />
          <input 
            type="password" 
            className="input input-primary bg-white w-full" 
            placeholder="Senha" 
          />
          <button className="btn btn-primary w-full text-white">Login</button>
        </div>
      </div>
    </main>
  );
}
