import { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { GameCard } from './components/GameCard';
import { GAMES_DATA } from './data/games';

const categories = [
  { label: '전체', value: 'all' },
  { label: '액션', value: 'action' },
  { label: 'RPG', value: 'rpg' },
  { label: '어드벤처', value: 'adventure' },
  { label: 'SF/우주', value: 'scifi' },
  { label: '인디', value: 'indie' },
  { label: '시뮬레이터', value: 'simulator'},
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [cartIds, setCartIds] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const matchesCategory =
        selectedCategory === 'all' || game.category === selectedCategory;
      const keyword = searchText.trim().toLowerCase();
      const matchesSearch =
        keyword.length === 0 ||
        game.title.toLowerCase().includes(keyword) ||
        game.description.toLowerCase().includes(keyword) ||
        game.genres.some((genre) => genre.toLowerCase().includes(keyword));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchText]);

  const addToCart = (gameId) => {
    setCartIds((currentIds) => {
      if (currentIds.includes(gameId)) {
        return currentIds;
      }
      return [...currentIds, gameId];
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.screen}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>VORTEX</Text>
            <Text style={styles.subtitle}>React Native 전환 실습</Text>
          </View>
          <View style={styles.cartPill}>
            <Ionicons name="cart" size={18} color="#081018" />
            <Text style={styles.cartText}>{cartIds.length}</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>웹 스토어를 앱 화면으로 바꿔보기</Text>
          <Text style={styles.heroBody}>
            원본 index.html의 게임 카드 목록을 View, Text, Image, Pressable로
            다시 만들어 봅니다.
          </Text>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#8fa3b8" />
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="게임 검색..."
            placeholderTextColor="#6f8192"
          />
        </View>

        <FlatList
          data={filteredGames}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.cardRow}
          ListHeaderComponent={
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={(item) => item.value}
              contentContainerStyle={styles.categoryList}
              renderItem={({ item }) => {
                const isActive = item.value === selectedCategory;
                return (
                  <Pressable
                    style={[styles.categoryChip, isActive && styles.categoryChipActive]}
                    onPress={() => setSelectedCategory(item.value)}
                  >
                    <Text
                      style={[
                        styles.categoryChipText,
                        isActive && styles.categoryChipTextActive,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                );
              }}
            />
          }
          renderItem={({ item }) => (
            <GameCard
              game={item}
              isInCart={cartIds.includes(item.id)}
              onPress={() => setSelectedGame(item)}
              onAddToCart={() => addToCart(item.id)}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>일치하는 게임을 찾을 수 없습니다.</Text>
          }
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Modal
        visible={Boolean(selectedGame)}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedGame(null)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            {selectedGame && (
              <>
                <Image source={{ uri: selectedGame.image }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedGame.title}</Text>
                <Text style={styles.modalMeta}>
                  {selectedGame.genres.join(' / ')} · 평점 {selectedGame.rating} · 출시년도 {selectedGame.releaseYear}
                </Text>
                <Text style={styles.modalDescription}>{selectedGame.description}</Text>
                <View style={styles.modalActions}>
                  <Pressable
                    style={styles.modalSecondaryButton}
                    onPress={() => setSelectedGame(null)}
                  >
                    <Text style={styles.modalSecondaryText}>닫기</Text>
                  </Pressable>
                  <Pressable
                    style={styles.modalPrimaryButton}
                    onPress={() => {
                      addToCart(selectedGame.id);
                      setSelectedGame(null);
                    }}
                  >
                    <Text style={styles.modalPrimaryText}>장바구니 담기</Text>
                  </Pressable>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#070b12',
  },
  screen: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  logo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#8fa3b8',
    fontSize: 13,
    marginTop: 2,
  },
  cartPill: {
    alignItems: 'center',
    backgroundColor: '#22d3ee',
    borderRadius: 999,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  cartText: {
    color: '#081018',
    fontSize: 15,
    fontWeight: '800',
  },
  hero: {
    backgroundColor: '#111827',
    borderColor: '#223044',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 14,
    padding: 16,
  },
  heroTitle: {
    color: '#f8fafc',
    fontSize: 21,
    fontWeight: '800',
    lineHeight: 28,
  },
  heroBody: {
    color: '#a7b5c4',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  searchBox: {
    alignItems: 'center',
    backgroundColor: '#0e1624',
    borderColor: '#223044',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  searchInput: {
    color: '#ffffff',
    flex: 1,
    fontSize: 15,
    height: 44,
  },
  categoryList: {
    gap: 8,
    paddingBottom: 14,
    paddingTop: 4,
  },
  categoryChip: {
    backgroundColor: '#101827',
    borderColor: '#26364d',
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  categoryChipActive: {
    backgroundColor: '#22d3ee',
    borderColor: '#22d3ee',
  },
  categoryChipText: {
    color: '#b6c3d1',
    fontSize: 13,
    fontWeight: '700',
  },
  categoryChipTextActive: {
    color: '#06111f',
  },
  listContent: {
    paddingBottom: 28,
  },
  cardRow: {
    gap: 12,
  },
  emptyText: {
    color: '#8fa3b8',
    marginTop: 32,
    textAlign: 'center',
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#0e1624',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 18,
  },
  modalImage: {
    backgroundColor: '#182235',
    borderRadius: 8,
    height: 190,
    marginBottom: 14,
    width: '100%',
  },
  modalTitle: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: '900',
  },
  modalMeta: {
    color: '#22d3ee',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
  },
  modalDescription: {
    color: '#b7c4d2',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },
  modalSecondaryButton: {
    alignItems: 'center',
    borderColor: '#334155',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 13,
  },
  modalSecondaryText: {
    color: '#d8e2ec',
    fontSize: 15,
    fontWeight: '800',
  },
  modalPrimaryButton: {
    alignItems: 'center',
    backgroundColor: '#22d3ee',
    borderRadius: 8,
    flex: 1,
    paddingVertical: 13,
  },
  modalPrimaryText: {
    color: '#06111f',
    fontSize: 15,
    fontWeight: '900',
  },
});
