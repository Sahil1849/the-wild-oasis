import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rizcppdtktlcuzwcwpbp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpemNwcGR0a3RsY3V6d2N3cGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NjM4ODcsImV4cCI6MjA0NTIzOTg4N30.dD5AOSvH8nXSzV1R-wYbu04dfXVsCVxSoXj2G9RZeG8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
