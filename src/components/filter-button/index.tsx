import { useRouter, useSearchParams } from "next/navigation";
import { OrderAscendingIcon, OrderDescendingIcon } from "../icons";
import styles from "./styles.module.css";

export default function FilterButton() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortOrder = searchParams.get("order") ?? "asc";

  const toggleOrder = () => {
    const newValue = sortOrder === "desc" ? "asc" : "desc";
    const params = new URLSearchParams(searchParams.toString());
    params.set("order", newValue);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.button_container}>
      <button
        className={styles.button}
        onClick={toggleOrder}
      >
        {sortOrder === "asc" ? (
          <>
            <OrderAscendingIcon /> Data de publicação: mais antigos primeiro{" "}
          </>
        ) : (
          <>
            <OrderDescendingIcon /> Data de publicação: mais recentes primeiro
          </>
        )}
      </button>
    </div>
  );
}
