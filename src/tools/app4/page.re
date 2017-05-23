module Page = {
  include ReactRe.Component;
  type props = {message: string};
  let name = "Page";
  let handleClick _ _ => {
    let f1 = Fib.fib 10;
    let f2 = Fib.fib 20;
    let sum = Add.add f1 f2;
    print_endline "clicked!";
    print_int sum;
    None
  };

  let render {props, updater} =>
    <div onClick=(updater handleClick)> (ReactRe.stringToElement props.message) </div>;
};

include ReactRe.CreateComponent Page;

let createElement ::message => wrapProps {message: message};