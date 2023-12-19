-- CreateTable
CREATE TABLE "Restaurante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "links" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "restauranteId" INTEGER NOT NULL,
    CONSTRAINT "Cardapio_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cardapioId" INTEGER NOT NULL,
    CONSTRAINT "Categoria_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    CONSTRAINT "Produtos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produtos_Desejos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produtosId" INTEGER NOT NULL,
    "listaDesejosId" INTEGER NOT NULL,
    CONSTRAINT "Produtos_Desejos_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "Produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Produtos_Desejos_listaDesejosId_fkey" FOREIGN KEY ("listaDesejosId") REFERENCES "ListaDejesos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ListaDejesos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurante_id_key" ON "Restaurante"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cardapio_restauranteId_key" ON "Cardapio"("restauranteId");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_cardapioId_key" ON "Categoria"("cardapioId");

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_categoriaId_key" ON "Produtos"("categoriaId");

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_Desejos_id_key" ON "Produtos_Desejos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_Desejos_produtosId_key" ON "Produtos_Desejos"("produtosId");

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_Desejos_listaDesejosId_key" ON "Produtos_Desejos"("listaDesejosId");

-- CreateIndex
CREATE UNIQUE INDEX "ListaDejesos_id_key" ON "ListaDejesos"("id");
