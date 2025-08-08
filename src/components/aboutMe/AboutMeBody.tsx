import { locale } from "@/types";
import Modal from "./Modal";
import { modals } from "./modals";

export default function AboutMeBody({ locale }: { locale: locale }) {
  console.log("AboutMeBody");
  return (
    <div className="grid grid-cols-6 grid-rows-7 w-full gap-2 min-h-80">
      {modals.map((modal) => (
        <div
          key={modal.title[locale]}
          className={`rounded-lg overflow-hidden ${modal.gridArea}`}
        >
          <Modal title={modal.title[locale]} url={modal.url}>
            {modal.content[locale]}
          </Modal>
        </div>
      ))}
    </div>
  );
}
