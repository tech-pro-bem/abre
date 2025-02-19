import { useSearchParams, useRouter } from "next/navigation";
import styles from "./styles.module.css";
import Image from "next/image";


export default function FilterButton() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortOrder = searchParams.get("order") === "old" ? "old" : "recent";

  const toggleOrder = () => {
    const newValue = sortOrder === "recent" ? "old" : "recent";
    const params = new URLSearchParams(searchParams.toString());
    params.set("order", newValue)
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.button_container}>
      {sortOrder === "recent" ? (
        <button className={styles.button} onClick={toggleOrder}>
          Mais recentes 
          <Image
            className={styles.seta_recentes}
            src="/recentes.svg"
            width={19}
            height={18}
            alt="seta-recentes"
          />
        </button>
      ) : (
        <button className={styles.button} onClick={toggleOrder}>
          Mais antigos
          <Image
            className={styles.seta_antigos}
            src="/antigos.svg"
            width={19}
            height={18}
            alt="seta-antigos"
          />
        </button>
      )}
    </div>
  );
}
