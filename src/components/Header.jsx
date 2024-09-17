import { Image } from "antd";
function Header() {
  return (
    <>
      <div>
        <Image.PreviewGroup items={["https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" ]}>
          <Image
            width={200}
            height={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
        </Image.PreviewGroup>
      </div>
    </>
  );
}
export default Header;
