import * as React from 'react';
import './logo.scss';

interface Props {
  width: string,
}

const Logo = (props: Props) => {
  return (
    <div>
      <img
        width={props.width || '100%'}
        src="https://previews.dropbox.com/p/thumb/AAfvaY6rOdp6-PSACHzFogyfmVbFiKtNkMYYrWqqeJaIH9PqGDwu5gCssvEqqBEEzbXT6SxcRzl7Fp8SYJwa7GXaWlmgeOqY8v_ATyRniJtwK00TpvI-XsEObYWXGZK78KGWFVY5x43ifYXnqPkaR7y5R8nrjObeW3eGMcrUsLgIYkz3UEoXkd4zAwRVNqK5QBZjDnjdg2eT-7qHQYsyCWh7vL4vQmCVY1JDdT7DU2PWNy42AXI7y20RJ7P75QqzJ_4aGV8m9a-ILIgu-Z43HYvyJOpzDEcAQOX_FwlxlFSj0GvCngB3FxoS9PJUhv79JlhA66MFk3IwHjWq1tCoW8wD/p.png?fv_content=true&size_mode=5"
      />
    </div>
  );
};

export default Logo;
