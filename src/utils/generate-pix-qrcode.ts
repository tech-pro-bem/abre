import { QrCodePix } from "qrcode-pix";

type GeneratePixQrCodeParams = {
  key: string;
  name: string;
  city: string;
};

export async function generatePixQrCode({ key, name, city }: GeneratePixQrCodeParams) {
  const qrCodePix = QrCodePix({
    version: "01",
    key,
    name,
    city,
    value: 0,
  });

  return {
    pixString: qrCodePix.payload(),
    qrCode: await qrCodePix.base64(),
  };
}
