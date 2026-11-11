const initialProducts = [
  {
    id: 1,
    name: 'Bó Hoa Hồng Pastel Ngọt Ngào',
    price: '350.000đ',
    oldPrice: '420.000đ',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&auto=format&fit=crop',
    discount: 16,
    sold: 120,
    createdAt: '2026-11-01',
    badge: 'NEW',
    badgeClass: 'label-new',
    category: 'love',
    description: 'Bó hoa hồng pastel phối cùng hoa baby trắng tinh khôi, biểu trưng cho tình yêu thuần khiết và sự trân trọng. Phù hợp tặng sinh nhật, kỷ niệm hoặc chúc mừng.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 2,
    name: 'Bó Hoa Đồng Nội',
    price: '290.000đ',
    oldPrice: '-',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&auto=format&fit=crop',
    discount: 0,
    sold: 85,
    createdAt: '2026-11-02',
    badge: 'NEW',
    badgeClass: 'label-new',
    category: 'birthday',
    description: 'Mang vẻ đẹp mộc mạc, bình dị nhưng đầy cuốn hút của những bông hoa dại khoe sắc, mang lại cảm giác bình yên và thư thái.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 3,
    name: 'Hoa Tình Yêu Ngọt Ngào',
    price: '420.000đ',
    oldPrice: '-',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500&auto=format&fit=crop',
    discount: 0,
    sold: 310,
    createdAt: '2026-11-03',
    badge: 'NEW',
    badgeClass: 'label-new',
    category: 'love',
    description: 'Sự kết hợp hoàn hảo giữa hoa hồng đỏ thắm và phụ kiện cao cấp, lời tỏ tình dịu dàng và chân thành nhất.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 4,
    name: 'Giỏ Hoa Thanh Xuân',
    price: '390.000đ',
    oldPrice: '-',
    image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=500&auto=format&fit=crop',
    discount: 0,
    sold: 45,
    createdAt: '2026-11-04',
    badge: 'NEW',
    badgeClass: 'label-new',
    category: 'birthday',
    description: 'Giỏ hoa tràn đầy năng lượng tươi trẻ, thích hợp tặng bạn bè, đồng nghiệp nhân dịp sinh nhật và các ngày lễ kỷ niệm.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 5,
    name: 'Bó Hồng Đỏ Nồng Nàn',
    price: '320.000đ',
    oldPrice: '400.000đ',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500&auto=format&fit=crop',
    discount: 20,
    sold: 520,
    createdAt: '2026-11-05',
    badge: '-20%',
    badgeClass: 'label-sale',
    category: 'love',
    description: 'Bó hoa hồng đỏ kiêu sa biểu tượng cho tình yêu vĩnh cửu và sự đam mê mãnh liệt, món quà ý nghĩa trong các dịp đặc biệt.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 6,
    name: 'Hoa Sắc Màu Rực Rỡ',
    price: '300.000đ',
    oldPrice: '400.000đ',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=500&auto=format&fit=crop',
    discount: 25,
    sold: 260,
    createdAt: '2026-11-06',
    badge: '-25%',
    badgeClass: 'label-sale',
    category: 'congrats',
    description: 'Sự kết hợp đa sắc màu rực rỡ tươi mới đem lại niềm vui, sự lạc quan và may mắn ngập tràn cho không gian sống.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 7,
    name: 'Bó Hoa Dịu Dàng',
    price: '255.000đ',
    oldPrice: '300.000đ',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500&auto=format&fit=crop',
    discount: 15,
    sold: 180,
    createdAt: '2026-11-07',
    badge: 'NEW',
    badgeClass: 'label-new',
    category: 'birthday',
    description: 'Tone màu phấn nhẹ nhàng, thanh lịch, mang lại cảm giác bình yên, ấm áp và thư thái cho người nhận.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 8,
    name: 'Giỏ Hoa Ngọt Ngào',
    price: '350.000đ',
    oldPrice: '500.000đ',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&auto=format&fit=crop',
    discount: 30,
    sold: 410,
    createdAt: '2026-11-08',
    badge: '-30%',
    badgeClass: 'label-sale',
    category: 'congrats',
    description: 'Giỏ hoa tông pastel kết hợp hoa hồng và baby, sang trọng và đầy cuốn hút, là điểm nhấn tuyệt vời cho mọi bữa tiệc.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 9,
    name: 'Hoa Chúc Mừng Rạng Rỡ',
    price: '450.000đ',
    oldPrice: '-',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&auto=format&fit=crop',
    discount: 0,
    sold: 95,
    createdAt: '2026-11-09',
    badge: 'NEW',
    badgeClass: 'label-new',
    category: 'opening',
    description: 'Lẵng hoa chúc mừng khai trương và sự kiện tươi sáng, biểu trưng cho sự thịnh vượng, phát tài phát lộc.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  },
  {
    id: 10,
    name: 'Bó Hoa Cưới Hạnh Phúc',
    price: '540.000đ',
    oldPrice: '600.000đ',
    image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=500&auto=format&fit=crop',
    discount: 10,
    sold: 150,
    createdAt: '2026-11-10',
    badge: '-10%',
    badgeClass: 'label-sale',
    category: 'wedding',
    description: 'Bó hoa cưới cầm tay cô dâu tinh tế, lãng mạn, tôn vinh khoảnh khắc hạnh phúc nhất trong ngày trọng đại.',
    features: [
      '🌸 Hoa tươi chọn lọc 100% trong ngày',
      '💌 Tặng kèm thiệp chúc mừng & banner',
      '🚚 Giao nhanh trong 60 phút nội thành'
    ]
  }
];

module.exports = initialProducts;

