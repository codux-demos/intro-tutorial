import img1 from '../../../assets/phto-1.png';
import img2 from '../../../assets/phto-2.png';
import img3 from '../../../assets/phto-3.png';
import img4 from '../../../assets/phto-4.png';
import img5 from '../../../assets/phto-5.png';
import img6 from '../../../assets/phto-6.png';
import { Image } from '../../common/image/image';
import { Task04 as Task } from '../../tasks/04/task-04';
import styles from './lesson-04.module.scss';

export const Lesson04 = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div className={styles.column}>
                    <div className={styles.images}>
                        <Image src={img1} className={styles.left} />
                        <Image src={img3} className={styles.left} />
                        <Image src={img5} className={styles.left} />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.images}>
                        <Image src={img2} className={styles.right} />
                        <Image src={img4} className={styles.right} />
                        <Image src={img6} className={styles.right} />
                    </div>
                </div>
            </div>
        </div>
    );
};
