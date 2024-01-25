export type SearchIconProps = {
  color?: string;
}

export const Search = ({ color = "white" } : SearchIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
    >
      <path
        d="M23.2131 19.2132L19.1531 15.1532L16.0303 13.863C17.0701 12.3843 17.6272 10.6203 17.6252 8.81258C17.6252 3.95329 13.6719 0 8.81258 0C3.95329 0 0 3.95329 0 8.81258C0 13.6719 3.95329 17.6252 8.81258 17.6252C10.636 17.6272 12.4147 17.0605 13.9008 16.004L15.1876 19.1184L19.2475 23.1786C19.5079 23.439 19.817 23.6456 20.1572 23.7865C20.4974 23.9274 20.862 24 21.2302 24C21.5985 24 21.9631 23.9275 22.3033 23.7866C22.6435 23.6457 22.9526 23.4391 23.213 23.1788C23.4734 22.9184 23.68 22.6093 23.8209 22.2691C23.9618 21.9289 24.0344 21.5643 24.0344 21.196C24.0344 20.8278 23.9619 20.4632 23.821 20.123C23.6801 19.7827 23.4735 19.4736 23.2131 19.2132ZM1.60229 8.81258C1.60229 4.83691 4.83691 1.60229 8.81258 1.60229C12.7883 1.60229 16.0229 4.83691 16.0229 8.81258C16.0229 12.7883 12.7883 16.0229 8.81258 16.0229C4.83691 16.0229 1.60229 12.7883 1.60229 8.81258ZM22.0801 22.0457C21.8545 22.2707 21.5489 22.3971 21.2303 22.3971C20.9117 22.3971 20.6061 22.2707 20.3805 22.0457L16.5465 18.2116L15.3501 15.3157L18.2461 16.5121L22.0802 20.3462C22.3052 20.5718 22.4315 20.8774 22.4315 21.196C22.4315 21.5146 22.3051 21.8201 22.0801 22.0457Z"
        fill={color}
      />
    </svg>
  );
};