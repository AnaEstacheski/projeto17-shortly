--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shortened; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shortened (
    id integer NOT NULL,
    url text NOT NULL,
    shorturl text NOT NULL,
    "userId" integer
);


--
-- Name: shortened_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shortened_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shortened_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shortened_id_seq OWNED BY public.shortened.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: visits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.visits (
    id integer NOT NULL,
    shortid integer,
    visit integer DEFAULT 1 NOT NULL
);


--
-- Name: visits_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.visits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.visits_id_seq OWNED BY public.visits.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shortened id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortened ALTER COLUMN id SET DEFAULT nextval('public.shortened_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: visits id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits ALTER COLUMN id SET DEFAULT nextval('public.visits_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxMSwiaWF0IjoxNjcxNzY4MjI2fQ.uz3bZToIprgtgzE0pHnxGG0klz7tzTl1gnbf8xDrGgA', 11);


--
-- Data for Name: shortened; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.shortened VALUES (1, 'https://www.google.com', 'FlIpnC9-RFEchTGqwQtjA', NULL);
INSERT INTO public.shortened VALUES (2, 'https://www.google.com', 'ORI0hphPe8d-agIgE5ZOr', NULL);
INSERT INTO public.shortened VALUES (3, 'https://www.google1.com', 'WzeCW09myUsRVJQfQJ3o8', NULL);
INSERT INTO public.shortened VALUES (4, 'https://www.google2.com', 'nQyl61fArTm4MCwuTpYVS', NULL);
INSERT INTO public.shortened VALUES (5, 'https://www.google3.com', 'JYCC0l2HwKBXT33aFoAH_', NULL);
INSERT INTO public.shortened VALUES (6, 'https://www.google4.com', '9MGuOe-Pmikgmn2yP_Qdg', NULL);
INSERT INTO public.shortened VALUES (7, 'https://www.google4.com', 'AloUFZcK0ddebCtyRtZTH', NULL);
INSERT INTO public.shortened VALUES (8, 'https://www.google5.com', 'ev5qeP79wMllNq6ALaizN', 11);
INSERT INTO public.shortened VALUES (9, 'https://www.google6.com', '5q0K3mdVWBzgu737n0QWx', 11);
INSERT INTO public.shortened VALUES (10, 'https://www.google7.com', 'nV_X0eFJ368SlTJGynnMt', 11);
INSERT INTO public.shortened VALUES (11, 'https://www.google8.com', 'gXf4bDhfsYBQnZae2atUL', 11);
INSERT INTO public.shortened VALUES (12, 'https://www.google9.com', 'f-msD9GhCIfIiZJAnR6wD', 11);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', 'driven');
INSERT INTO public.users VALUES (2, 'João', 'joa@driven.com.br', 'driven');
INSERT INTO public.users VALUES (3, 'João', 'joaoo@driven.com', 'driven');
INSERT INTO public.users VALUES (4, 'Ana', 'ana@driven.com', 'driven');
INSERT INTO public.users VALUES (5, 'Ana', 'anaf@driven.com', '$2b$10$Kuimg2jpTNYPDsYUB8Q4.eeIPW7WBsrnVg7lqT19BuvkheF5XnMpu');
INSERT INTO public.users VALUES (6, 'Ana', 'anavlia@driven.com', '$2b$10$UQp.B6Ov3DUHD8RkYVHyHOMY3ZYTjqg8tXNJyDL7kg2DjnN.75I5W');
INSERT INTO public.users VALUES (7, 'Ana', 'anafs@driven.com', '$2b$10$zOk7Zh3slmkYkZtMMjBQvOq9jj6zh1.TLpXh6F8tCtYsuFP1bwjXa');
INSERT INTO public.users VALUES (8, 'Ana', 'af@driven.com', '$2b$10$s7YM066BVcv0VfIM7fAvHO68zC4TvM0mXGdbl4pxaxhpeSz.GP6AO');
INSERT INTO public.users VALUES (9, 'Flavia', 'flavs@driven.com', '$2b$10$ohb3t5RtjlRCswC0NfyM0OIeXY7m90ixzDpx6MpCzZYrXGWpj6RRq');
INSERT INTO public.users VALUES (10, 'Flavia', 'flav@driven.com', '$2b$10$uGz7kVESwlVQTxbz4BRa2O0p/RkvM1MNEeUh9O.5mmxIPuZCqZWNy');
INSERT INTO public.users VALUES (11, 'anaf', 'agoravai@driven.com', '$2b$10$vSgUWFifvV7lePcPuNb6QuUcJBodwGFZIzKpaY/XpRNsMHGEiZreK');


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.visits VALUES (1, 1, 9);
INSERT INTO public.visits VALUES (2, 8, 5);
INSERT INTO public.visits VALUES (3, 10, 1);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);


--
-- Name: shortened_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.shortened_id_seq', 12, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: visits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.visits_id_seq', 3, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: shortened shortened_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortened
    ADD CONSTRAINT shortened_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: visits visits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: shortened shortened_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortened
    ADD CONSTRAINT "shortened_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: visits visits_shortid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_shortid_fkey FOREIGN KEY (shortid) REFERENCES public.shortened(id);


--
-- PostgreSQL database dump complete
--

