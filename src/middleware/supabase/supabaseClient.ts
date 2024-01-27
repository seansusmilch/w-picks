import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkiethcagiozdxdyyude.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRraWV0aGNhZ2lvemR4ZHl5dWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzMjcwMTMsImV4cCI6MjAyMTkwMzAxM30.I5aFDJTs3ukWn30dwz4R25SyxffXRmAK2lmOWw5idAs'

export const supa = createClient(supabaseUrl, supabaseAnonKey);