import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  // cards sync
  // cards를 불러오면 onUpdate로 받은 콜백 함수 실행
  // 끝나면 sync off
  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }

  // 해당 데이터베이스 경로에 card데이터 저장
  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  // 해당 데이터베이스 경로에 card id인 데이터 삭제
  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
