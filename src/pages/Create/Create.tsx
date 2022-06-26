import CreateForm from '../../components/CreateForm/CreateForm';
import s from './Create.module.scss';

const Create = () => {
    return (
        <main>
            <div className="container">
                <div className="content">
                    <section className={s.create}>
                        <CreateForm />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Create;