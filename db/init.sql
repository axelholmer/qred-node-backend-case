CREATE TABLE Users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	status VARCHAR(50) DEFAULT 'ACTIVE',
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Companies (
	id SERIAL PRIMARY KEY,
	company_name VARCHAR(255) NOT NULL,
	user_id INT REFERENCES Users(id) NOT NULL,
	address VARCHAR(255),
	-- could also be own table
	phone VARCHAR(50),
	status VARCHAR(50) DEFAULT 'ACTIVE' NOT NULL,
	contact_email VARCHAR(255),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Accounts (
	id SERIAL PRIMARY KEY,
	company_id INT REFERENCES Companies(id) NOT NULL,
	account_name VARCHAR(255) NOT NULL,
	account_number VARCHAR(255) NOT NULL,
	-- encrypted?
	current_balance BIGINT,
	-- minor units
	currency VARCHAR(3),
	status VARCHAR(50) DEFAULT 'ACTIVE' NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Cards (
	id SERIAL PRIMARY KEY,
	account_id INT REFERENCES Accounts(id) NOT NULL,
	card_image_url VARCHAR(255),
	current_spend BIGINT,
	-- minor units
	spend_limit BIGINT,
	-- minor units
	currency VARCHAR(3),
	expiration_date TIMESTAMP,
	status VARCHAR(50) DEFAULT 'ACTIVE' NOT NULL,
	card_number VARCHAR(255) NOT NULL,
	-- encrypted?
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Transactions (
	id SERIAL PRIMARY KEY,
	card_id INT REFERENCES Cards(id) NOT NULL,
	transaction_date TIMESTAMP NOT NULL,
	amount BIGINT NOT NULL,
	-- minor units
	currency VARCHAR(3),
	description VARCHAR(255),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Invoices (
	id SERIAL PRIMARY KEY,
	company_id INT REFERENCES Companies(id) NOT NULL,
	due_date TIMESTAMP NOT NULL,
	amount BIGINT NOT NULL,
	-- minor units
	currency VARCHAR(3),
	paid_at TIMESTAMP,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data
INSERT INTO
	Users (name, email, status)
VALUES
	('Axel', 'axel@holmer.com', 'ACTIVE');

INSERT INTO
	Companies (
		company_name,
		user_id,
		address,
		phone,
		status,
		contact_email
	)
VALUES
	(
		'Axel Holmer AB',
		1,
		'Sveavägen 117b',
		'0707780098',
		'ACTIVE',
		'contact@axelhomer.com'
	);

INSERT INTO
	Accounts (
		company_id,
		account_name,
		account_number,
		current_balance,
		currency,
		status
	)
VALUES
	(
		1,
		'Konto1',
		'ACC123456',
		100000,
		'SEK',
		'ACTIVE'
	);

INSERT INTO
	Cards (
		account_id,
		card_image_url,
		current_spend,
		spend_limit,
		currency,
		expiration_date,
		status,
		card_number
	)
VALUES
	(
		1,
		'http://example.com/card_image.jpg',
		50000,
		150000,
		'SEK',
		'2025-12-31',
		'ACTIVE',
		'1234-5678-9012-3456'
	);

INSERT INTO
	Transactions (
		card_id,
		transaction_date,
		amount,
		currency,
		description
	)
VALUES
	(
		1,
		'2023-12-11 10:00:00',
		20000,
		'SEK',
		'Office supplies'
	);

INSERT INTO
	Invoices (company_id, due_date, amount, currency)
VALUES
	(1, '2024-01-15', 50000, 'SEK');