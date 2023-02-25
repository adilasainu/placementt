import { createClient } from "@supabase/supabase-js";


 const supabase=createClient(
"https://hktbozpkkyolxqdsmhct.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdGJvenBra3lvbHhxZHNtaGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NTQ5MTEsImV4cCI6MTk5MjIzMDkxMX0.g7r-cUKITFmdOtX7cRezWJzTBYFwXrxEFURQT-X5HD0")

export default supabase;