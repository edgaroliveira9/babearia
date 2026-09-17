CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    marca VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

INSERT INTO produtos (nome, preco, marca) VALUES
    ('Pomada Modeladora', 39.90, 'Bozzano'),
    ('Óleo para Barba', 45.00, 'QOD Barber Shop'),
    ('Shampoo Anticaspa', 29.90, 'Menz'),
    ('Balm Hidratante para Barba', 52.00, 'Proraso'),
    ('Cera Capilar Efeito Matte', 34.50, 'Truss'),
    ('Talco Pós-Barba', 22.00, 'Baba de Tigre');

INSERT INTO servicos (nome, preco) VALUES   
    ('Corte de Cabelo', 40.00),
    ('Barba Completa', 35.00),
    ('Corte + Barba', 65.00),
    ('Sobrancelha na Navalha', 15.00);
    