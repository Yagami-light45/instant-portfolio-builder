import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabaseClient';

const AuthComponent = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'github']}
        theme="dark"
      />
    </div>
  );
};

export default AuthComponent;