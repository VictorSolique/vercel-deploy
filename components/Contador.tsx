// components/Contador.tsx
"use client";

import { useEffect, useState } from "react";

interface TempoRestante {
  meses: number;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export function Contador() {
  const [tempo, setTempo] = useState<TempoRestante>({
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    // Alvo: 10 de Dezembro
    const anoAtual = new Date().getFullYear();
    const dataAlvo = new Date(`December 10, ${anoAtual} 00:00:00`).getTime();

    const intervalo = setInterval(() => {
      const agora = new Date().getTime();
      const diferenca = dataAlvo - agora;

      if (diferenca <= 0) {
        clearInterval(intervalo);
        return;
      }

      const umSegundo = 1000;
      const umMinuto = umSegundo * 60;
      const umaHora = umMinuto * 60;
      const umDia = umaHora * 24;
      const umMes = umDia * 30.44; 

      const meses = Math.floor(diferenca / umMes);
      const dias = Math.floor((diferenca % umMes) / umDia);
      const horas = Math.floor((diferenca % umDia) / umaHora);
      const minutos = Math.floor((diferenca % umaHora) / umMinuto);
      const segundos = Math.floor((diferenca % umMinuto) / umSegundo);

      setTempo({ meses, dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatarNumero = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white border border-slate-200 text-slate-800 rounded-2xl text-center shadow-xl shadow-slate-100">
      
      {/* TEXTO DE INFORMAÇÃO (EDITÁVEL) */}
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-3 tracking-tight">
        CONTADOR PARA O FINAL DO SEMESTRE
      </h2>
      <p className="text-sm md:text-base text-slate-500 max-w-md mx-auto mb-8">
        Só mais algum tempo até chegar no final do semestre, dia 10 de dezembro.
      </p>

      {/* BLOCOS DO CONTADOR */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 justify-center">
        
        {/* Bloco: Meses */}
        <div className="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span className="text-3xl md:text-4xl font-extrabold text-slate-800 tabular-nums">
            {formatarNumero(tempo.meses)}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
            Meses
          </span>
        </div>

        {/* Bloco: Dias */}
        <div className="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span className="text-3xl md:text-4xl font-extrabold text-slate-800 tabular-nums">
            {formatarNumero(tempo.dias)}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
            Dias
          </span>
        </div>

        {/* Bloco: Horas */}
        <div className="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span className="text-3xl md:text-4xl font-extrabold text-slate-800 tabular-nums">
            {formatarNumero(tempo.horas)}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
            Horas
          </span>
        </div>

        {/* Bloco: Minutos */}
        <div className="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-100 col-span-1 max-sm:col-start-1 max-sm:col-end-3">
          <span className="text-3xl md:text-4xl font-extrabold text-slate-800 tabular-nums">
            {formatarNumero(tempo.minutos)}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
            Minutos
          </span>
        </div>

        {/* Bloco: Segundos */}
        <div className="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-100 col-span-1 max-sm:col-start-1 max-sm:col-end-3">
          <span className="text-3xl md:text-4xl font-extrabold text-slate-800 tabular-nums">
            {formatarNumero(tempo.segundos)}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
            Segundos
          </span>
        </div>

      </div>
    </div>
  );
}
