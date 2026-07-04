import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function GameCard({ game, isInCart, onPress, onAddToCart }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: game.image }} style={styles.image} />

      {game.discount > 0 && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-{game.discount}%</Text>
        </View>
      )}

       {game.discount > 0 && (
        <View style={styles.badgeBadge}>
          <Text style={styles.badgeText}>{game.badge}</Text>
        </View>
      )}

      <View style={styles.body}>
        <Text style={styles.genre} numberOfLines={1}>
          {game.genres.join(' / ')}
        </Text>
        <Text style={styles.title} numberOfLines={2}>
          {game.title}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#facc15" />
            <Text style={styles.ratingText}>{game.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.originalPrice}> {game.originalPrice.toLocaleString()}</Text> <Text style={styles.price}>₩{game.price.toLocaleString()}</Text>
        </View>

        <Pressable
          style={[styles.cartButton, isInCart && styles.cartButtonDisabled]}
          onPress={onAddToCart}
        >
          <Ionicons
            name={isInCart ? 'checkmark-circle' : 'cart'}
            size={16}
            color={isInCart ? '#95a3b3' : '#06111f'}
          />
          <Text style={[styles.cartButtonText, isInCart && styles.cartButtonTextDisabled]}>
            {isInCart ? '담김' : '구매'}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#5e6ad2',
    borderColor: '#5e69d1',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    marginBottom: 12,
    overflow: 'hidden',
  },
  image: {
    backgroundColor: '#828fff',
    height: 118,
    width: '100%',
  },
  badgeBadge: {
    backgroundColor: '#fb335e',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    right:60,
    top: 8,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '900',
  },
  discountBadge: {
    backgroundColor: '#fb335e',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  discountText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '900',
  },
  body: {
    padding: 11,
  },
  genre: {
    color: '#22d3ee',
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 5,
  },
  title: {
    color: '#f8fafc',
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 20,
    minHeight: 40,
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  ratingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  ratingText: {
    color: '#d7e0ea',
    fontSize: 13,
    fontWeight: '800',
  },
  originalPrice: {
    color: '#808080',
    fontSize: 13,
    fontWeight: '1000',
  },
  price: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
  },
  cartButton: {
    alignItems: 'center',
    backgroundColor: '#22d3ee',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 9,
  },
  cartButtonDisabled: {
    backgroundColor: '#1f2937',
  },
  cartButtonText: {
    color: '#06111f',
    fontSize: 13,
    fontWeight: '900',
  },
  cartButtonTextDisabled: {
    color: '#95a3b3',
  },
});
