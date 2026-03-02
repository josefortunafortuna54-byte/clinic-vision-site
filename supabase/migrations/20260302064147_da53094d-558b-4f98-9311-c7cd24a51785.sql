
-- Table: sobre_conteudo (singleton for historia/jornada)
CREATE TABLE public.sobre_conteudo (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  historia text NOT NULL DEFAULT '',
  jornada text NOT NULL DEFAULT '',
  atualizado_em timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.sobre_conteudo ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read sobre_conteudo" ON public.sobre_conteudo
  FOR SELECT USING (true);

CREATE POLICY "Admins can update sobre_conteudo" ON public.sobre_conteudo
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert sobre_conteudo" ON public.sobre_conteudo
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Insert default row
INSERT INTO public.sobre_conteudo (historia, jornada) VALUES (
  'A Clínica QUICEP nasceu em 2015 com a missão de proporcionar cuidados de saúde naturais e integrais à comunidade de Luanda. Fundada por profissionais apaixonados pela medicina natural e pelo bem-estar holístico, a clínica rapidamente se tornou uma referência em saúde integrativa.

Ao longo dos anos, expandimos os nossos serviços para incluir ginecologia, naturopatia, farmácia natural e inovações tecnológicas como teleconsultas e assistente virtual.

Hoje, somos orgulhosamente reconhecidos como um centro de excelência em saúde natural, servindo milhares de pacientes com dedicação e profissionalismo.',
  '2015 - Fundação da Clínica QUICEP
2017 - Expansão dos serviços de Naturopatia
2019 - Inauguração da Farmácia Natural
2021 - Implementação de Teleconsultas
2023 - Lançamento do Assistente Virtual IA
2024 - Reconhecimento como Centro de Excelência'
);

-- Table: equipa
CREATE TABLE public.equipa (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  cargo text NOT NULL DEFAULT '',
  especialidade text NOT NULL DEFAULT '',
  descricao text NOT NULL DEFAULT '',
  foto_url text,
  ordem integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.equipa ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read equipa" ON public.equipa
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert equipa" ON public.equipa
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update equipa" ON public.equipa
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete equipa" ON public.equipa
  FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- Insert default team members
INSERT INTO public.equipa (nome, cargo, especialidade, descricao, foto_url, ordem) VALUES
('Dra. Maria Silva', 'Diretora Clínica', 'Naturopatia e Medicina Integrativa', 'Especialista em Naturopatia e Medicina Integrativa', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop', 1),
('Dr. João Santos', 'Ginecologista', 'Saúde Reprodutiva e Ginecologia', 'Especialista em Saúde Reprodutiva e Ginecologia', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop', 2),
('Dra. Ana Costa', 'Nutricionista', 'Nutrição Natural e Terapêutica', 'Especialista em Nutrição Natural e Terapêutica', 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop', 3),
('Dr. Jamisse', 'Terapeuta', 'Terapias Naturais e Aconselhamento', 'Especialista em Terapias Naturais e Aconselhamento', 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop', 4);

-- Table: configuracoes_clinica
CREATE TABLE public.configuracoes_clinica (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  telefone text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  endereco text NOT NULL DEFAULT '',
  horario text NOT NULL DEFAULT '',
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.configuracoes_clinica ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read configuracoes_clinica" ON public.configuracoes_clinica
  FOR SELECT USING (true);

CREATE POLICY "Admins can update configuracoes_clinica" ON public.configuracoes_clinica
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert configuracoes_clinica" ON public.configuracoes_clinica
  FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Insert default config
INSERT INTO public.configuracoes_clinica (telefone, email, endereco, horario) VALUES (
  '+244 923 456 789',
  'geral@clinicaquicep.co.ao',
  'Luanda, Angola',
  'Segunda a Sexta: 8h-18h | Sábado: 8h-13h'
);
