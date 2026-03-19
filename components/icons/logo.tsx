import clsx from "clsx";

export default function LogoIcon(
  props: React.ComponentProps<"img"> & { fill?: string },
) {
  const { fill, ...imgProps } = props;
  return (
    <img
      alt={`${process.env.SITE_NAME} logo`}
      {...imgProps}
      src={props.src || "/logo.png"}
      className={clsx("object-contain", props.className)}
    />
  );
}
