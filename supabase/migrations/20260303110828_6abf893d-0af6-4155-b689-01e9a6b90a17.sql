
-- Create storage bucket for team photos
INSERT INTO storage.buckets (id, name, public) VALUES ('equipa', 'equipa', true);

-- Allow anyone to read team photos
CREATE POLICY "Anyone can read equipa photos" ON storage.objects FOR SELECT USING (bucket_id = 'equipa');

-- Allow admins to upload team photos
CREATE POLICY "Admins can upload equipa photos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'equipa' AND public.has_role(auth.uid(), 'admin'));

-- Allow admins to update team photos
CREATE POLICY "Admins can update equipa photos" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'equipa' AND public.has_role(auth.uid(), 'admin'));

-- Allow admins to delete team photos
CREATE POLICY "Admins can delete equipa photos" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'equipa' AND public.has_role(auth.uid(), 'admin'));
