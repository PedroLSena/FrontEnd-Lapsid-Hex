"use client"
import { useState, useEffect } from "react";
import { metasServise } from "./services/Metas/metas";
import {GerenciamentoMeta} from "../app/types/gerenciamentoMeta"

export default function Home() {

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Gerenciamento de Propostas</h1>
    </div>
  );
}