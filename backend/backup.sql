--
-- PostgreSQL database dump
--

-- Dumped from database version 12.20 (Ubuntu 12.20-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 16.4 (Ubuntu 16.4-0ubuntu0.24.04.2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    title text NOT NULL,
    date text NOT NULL,
    description text NOT NULL,
    technologies jsonb NOT NULL,
    type text NOT NULL,
    link text,
    doi text,
    links jsonb,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, title, date, description, technologies, type, link, doi, links, created_at) FROM stdin;
1	IoT Vulnerability Scanner	Nov 2024	Developed a scanner using Laravel for the web frontend, Go for the backend server, and Python with Nmap for network scanning, focusing on identifying vulnerabilities in IoT devices.	["Laravel PHP", "Go", "Python", "IoT", "Nmap", "Bash Shell scripting"]	Project	https://github.com/izzuddinafif/iot-vuln-scanner		null	2024-11-24 16:55:36.33857+07
2	HTTP Server (Go & Python)	Jul 2024	Created a basic HTTP server in Go and Python as a part of Codecrafters challenge, handling HTTP requests and responses to serve static content. Strengthened knowledge of HTTP protocol internals and socket programming.	["Go", "Python", "HTTP protocol", "networking"]	Codecrafters			{"go": "https://github.com/izzuddinafif/codecrafters-http-server-go", "python": "https://github.com/izzuddinafif/codecrafters-http-server-python"}	2024-11-24 16:55:36.413728+07
3	Grep Tool (Go)	Sep 2024	Implemented a grep-like tool in Go as a part of Codecrafters challenge, parsing and searching through text inputs based on user-defined patterns. Enhanced skills in string processing, pattern matching, and command-line interface development.	["Go", "CLI tools", "Regular Expressions", "pattern matching"]	Codecrafters	https://github.com/izzuddinafif/codecrafters-grep-go-final		null	2024-11-24 16:55:36.496353+07
4	BitTorrent Client (Go)	Oct 2024	Built a BitTorrent client in Go as a part of Codecrafters challenge that can download files using the BitTorrent protocol, covering functionalities like bencoding parsing, peer discovery, and piece downloading. Developed understanding of file-sharing protocols and concurrency.	["Go", "BitTorrent protocol", "concurrency"]	Codecrafters	https://github.com/izzuddinafif/codecrafters-bittorrent-go		null	2024-11-24 16:55:36.586998+07
5	Redis-Compatible Server (Go)	Nov 2024	Developed a Redis-compatible server in Go as a part of Codecrafters challenge, handling basic commands and understanding the Redis protocol. Implemented a TCP server, key-value storage, and data persistence techniques.	["Go", "TCP server", "Redis"]	Codecrafters	https://github.com/izzuddinafif/codecrafters-redis-go		null	2024-11-24 16:55:36.668189+07
6	MATLAB-GA-PSO	Mar 2023	Developed a hybrid optimization algorithm combining Genetic Algorithm (GA) and Particle Swarm Optimization (PSO) in MATLAB, designed to optimize parameters for complex systems.	["MATLAB", "optimization algorithms", "genetic algorithm", "particle swarm optimization"]	Project	https://github.com/izzuddinafif/MATLAB-GA-PSO		null	2024-11-24 16:55:36.746013+07
7	PasarKu	May 2023	Developed a simple Android market application featuring pages for login, product categories (vegetables, fruits), and checkout. This project involved UI design in Android Studio and managing user interactions.	["Java", "Android Studio"]	Project	https://github.com/izzuddinafif/PasarKu		null	2024-11-24 16:55:36.827946+07
8	Computer Architecture with x86 Assembly	Aug 2021 - Dec 2021	Completed practical tasks on the Intel 8086 microprocessor, including integrating a heat sensor with ADC/DAC for temperature measurement, adding an LED display, and implementing RAM memory interfacing for data storage and retrieval.	["Assembly (x86)", "Intel 8086", "Computer Architecture"]	Project	https://github.com/izzuddinafif/comp-arch-x86-asm		null	2024-11-24 16:55:36.91162+07
9	CTF Write-Ups and Solutions	Mar 2024	Documented write-ups and solutions for Capture the Flag (CTF) challenges focusing on exploitation, reverse engineering, and network analysis. Platforms include OverTheWire and HackTheBox.	["Python", "Bash Shell scripting", "cybersecurity tools"]	Project			{"hackthebox": "https://github.com/izzuddinafif/HackTheBox", "overthewire": "https://github.com/izzuddinafif/OverTheWire"}	2024-11-24 16:55:37.002754+07
10	ProjectEuler Solutions	Nov 2022	Completed various ProjectEuler problems showcasing problem-solving and algorithmic skills in a variety of mathematical and computational challenges.	["C"]	Project	https://github.com/izzuddinafif/ProjectEuler		null	2024-11-24 16:55:37.083745+07
11	Exercism Solutions	Aug 2024	Completed coding challenges on Exercism, covering multiple language tracks to improve problem-solving skills and deepen programming knowledge.	["Go", "Python", "various programming languages"]	Project	https://github.com/izzuddinafif/Exercism		null	2024-11-24 16:55:37.166516+07
12	Predictive Maintenance in Elevator Industry	Nov 2023	Developed a machine learning model to predict maintenance needs for elevators using sensor data (vibration, temperature, etc.). Compared models like Random Forest and Decision Trees to improve reliability and reduce downtime.	["Python", "Jupyter Notebook", "Scikit-Learn", "Machine Learning Algorithms"]	Project	https://github.com/izzuddinafif/predictive-maintenance-elevator-ml		null	2024-11-24 16:55:37.251384+07
13	Design of Corrugated Road Detection System	Sep 19, 2022	Developed a system to detect corrugated road conditions and transmit data, including GPS coordinates and site images, through LoRa technology to a web-based Geolocation Information System (webGIS). Achieved an average data transmission delay of 0.67 ms with GPS location accuracy within 2.285 meters.	["LoRa", "GPS", "webGIS"]	Publication		10.1109/IES55876.2022.9888636	null	2024-11-24 16:55:37.343867+07
\.


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 13, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

