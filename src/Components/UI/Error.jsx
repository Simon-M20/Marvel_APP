import { useContext } from "react";
import styles from "../../Assets/Styles/Error404.module.css";
import strangeLogo from "../../Assets/doctor-strange-minimal.webp";
import Header from "../Header";
import MarvelContext from "../../Context/GlobalContext";
import SearchBar from "./SearchBar";

import Swal from "sweetalert2";

import Thanos from "../../Assets/mr-stark-ash.gif";

function Error404() {
    const { showMenu, search, searchedCharacter, error } =
        useContext(MarvelContext);

    if (search) return <SearchBar />;

    if (error) {
        Swal.fire({
            title: "Oh no!",
            text: `Seems like thanos snaped ${searchedCharacter} from the universe.`,
            imageUrl: `${Thanos}`,
            imageWidth: 250,
            imageHeight: 250,
            color: "#e62429",
            background: "#222222",

            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
            },
            imageAlt: "Thanos Snap",
        });
    }

    const handleClick = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton:
                    "bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 ml-1",
                cancelButton:
                    "bg-red-600 text-yellow-400 font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mr-1",
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                background: "#222222",
                showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `,
                },
                hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `,
                },
                color: "#fff",
                confirmButtonText: "Yes, takes me back!",
                cancelButtonText: "No, let me here!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "Awesome!",
                        text: "You will be redirected to another universe.",
                        icon: "success",
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Got it",
                        text: "You will stay in this universe since you are safe :)",
                        icon: "error",
                    });
                }
            });
    };

    return (
        <section
            className={`${styles.error__container} text-gray-400 ${
                showMenu ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${strangeLogo})` }}>
            <Header />
            <section className={styles.error__message}>
                <p className='text-3xl font-semibold'>Error 404</p>
                <h1
                    className={`${styles.error__title} uppercase font-extrabold antialiased text-white`}>
                    oops
                </h1>
                <p className='text-2xl uppercase'>the empty-verse</p>
                <button className={styles.error__button} onClick={handleClick}>
                    back to the universe
                </button>
            </section>
        </section>
    );
}

export default Error404;
