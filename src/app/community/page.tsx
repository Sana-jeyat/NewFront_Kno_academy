'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Trophy, 
  Star, 
  Plus,
  Search,
  Filter,
  TrendingUp,
  Award,
  Crown,
  Flame,
  Target,
  Calendar,
  Bell,
  UserPlus,
  Settings,
  Send,
  ThumbsUp,
  Reply,
  MoreHorizontal,
  Zap,
  Brain,
  Shield,
  DollarSign,
  Stethoscope,
  Globe,
  BookOpen,
  Clock,
  Eye,
  ChevronRight
} from 'lucide-react'

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('forums')
  const [selectedForum, setSelectedForum] = useState(null)
  const [newPostContent, setNewPostContent] = useState('')
  const [showNewPost, setShowNewPost] = useState(false)

  const forums = [
    {
      id: 'sciences',
      name: 'Sciences & Technologie',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      members: 12847,
      posts: 3421,
      description: 'Physique, chimie, biologie, informatique...',
      lastActivity: '2 min',
      trending: true
    },
    {
      id: 'finance',
      name: 'Finance & Économie',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      members: 8934,
      posts: 2156,
      description: 'Trading, crypto, économie, investissement...',
      lastActivity: '5 min',
      trending: false
    },
    {
      id: 'health',
      name: 'Santé & Médecine',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      members: 6721,
      posts: 1834,
      description: 'Médecine, pharmacie, soins, recherche...',
      lastActivity: '12 min',
      trending: true
    },
    {
      id: 'history',
      name: 'Histoire & Culture',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      members: 5432,
      posts: 1567,
      description: 'Histoire, géographie, arts, littérature...',
      lastActivity: '18 min',
      trending: false
    },
    {
      id: 'general',
      name: 'Discussions Générales',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500',
      members: 15234,
      posts: 4892,
      description: 'Tout ce qui ne rentre pas ailleurs...',
      lastActivity: '1 min',
      trending: false
    }
  ]

  const posts = [
    {
      id: 1,
      title: 'Comment la blockchain révolutionne-t-elle la recherche médicale ?',
      author: {
        name: 'Dr. Sarah Chen',
        avatar: '👩‍⚕️',
        level: 'Expert',
        badges: ['🏆', '🔬', '⭐']
      },
      forum: 'health',
      content: 'Je travaille sur un projet qui utilise la blockchain pour sécuriser les données de recherche clinique. Quelqu\'un a-t-il de l\'expérience dans ce domaine ?',
      likes: 47,
      replies: 23,
      views: 892,
      timeAgo: '2h',
      trending: true,
      tags: ['blockchain', 'recherche', 'données']
    },
    {
      id: 2,
      title: 'Stratégies de trading DeFi pour débutants',
      author: {
        name: 'CryptoMaster',
        avatar: '🚀',
        level: 'Avancé',
        badges: ['💎', '📈', '🔥']
      },
      forum: 'finance',
      content: 'Voici mes 5 stratégies préférées pour commencer dans la DeFi sans prendre trop de risques...',
      likes: 156,
      replies: 67,
      views: 2341,
      timeAgo: '4h',
      trending: true,
      tags: ['defi', 'trading', 'crypto']
    },
    {
      id: 3,
      title: 'L\'IA peut-elle vraiment remplacer les radiologues ?',
      author: {
        name: 'Marie Dubois',
        avatar: '👩‍🔬',
        level: 'Intermédiaire',
        badges: ['🧠', '🏥']
      },
      forum: 'health',
      content: 'Débat intéressant après avoir suivi le cours sur l\'IA médicale. Vos avis ?',
      likes: 89,
      replies: 34,
      views: 1456,
      timeAgo: '6h',
      trending: false,
      tags: ['ia', 'médecine', 'radiologie']
    }
  ]

  const leaderboards = [
    {
      title: 'Top Apprenants de la Semaine',
      type: 'individual',
      users: [
        { rank: 1, name: 'Alex Thompson', avatar: '👨‍💻', kno: 2847, streak: 23 },
        { rank: 2, name: 'Marie Dubois', avatar: '👩‍🎓', kno: 2634, streak: 19 },
        { rank: 3, name: 'Jean Martin', avatar: '👨‍🔬', kno: 2456, streak: 15 },
        { rank: 4, name: 'Sophie Chen', avatar: '👩‍💼', kno: 2234, streak: 12 },
        { rank: 5, name: 'Thomas Weber', avatar: '👨‍🎨', kno: 2156, streak: 18 }
      ]
    },
    {
      title: 'Top Écoles/Universités',
      type: 'school',
      users: [
        { rank: 1, name: 'École Polytechnique', avatar: '🏛️', kno: 45678, members: 234 },
        { rank: 2, name: 'Sorbonne Université', avatar: '🎓', kno: 42341, members: 189 },
        { rank: 3, name: 'HEC Paris', avatar: '💼', kno: 38967, members: 156 },
        { rank: 4, name: 'EPFL Lausanne', avatar: '⚡', kno: 35234, members: 143 },
        { rank: 5, name: 'Sciences Po', avatar: '🌍', kno: 32156, members: 128 }
      ]
    }
  ]

  const challenges = [
    {
      id: 1,
      title: 'Défi Sciences de la Semaine',
      description: 'Complétez 5 cours de sciences et gagnez des récompenses exclusives',
      participants: 1247,
      timeLeft: '3 jours',
      reward: 150,
      progress: 67,
      type: 'weekly',
      icon: '🔬'
    },
    {
      id: 2,
      title: 'Marathon Communautaire',
      description: 'Objectif collectif : 10,000 heures d\'apprentissage cette semaine',
      participants: 3456,
      timeLeft: '5 jours',
      reward: 200,
      progress: 78,
      type: 'community',
      icon: '🏃‍♂️'
    },
    {
      id: 3,
      title: 'Quiz Master Challenge',
      description: 'Réussissez 20 quiz parfaits ce mois-ci',
      participants: 892,
      timeLeft: '12 jours',
      reward: 300,
      progress: 45,
      type: 'monthly',
      icon: '🧠'
    }
  ]

  const friends = [
    { name: 'Alex Thompson', avatar: '👨‍💻', status: 'online', currentCourse: 'Blockchain Basics' },
    { name: 'Marie Dubois', avatar: '👩‍🎓', status: 'learning', currentCourse: 'IA Médicale' },
    { name: 'Jean Martin', avatar: '👨‍🔬', status: 'offline', currentCourse: null },
    { name: 'Sophie Chen', avatar: '👩‍💼', status: 'online', currentCourse: 'Marketing Digital' }
  ]

  const clubs = [
    {
      name: 'Pharmaciens Connectés',
      members: 234,
      avatar: '💊',
      description: 'Club privé pour les professionnels de la pharmacie',
      isPrivate: true,
      isMember: true
    },
    {
      name: 'Crypto Enthusiasts',
      members: 567,
      avatar: '₿',
      description: 'Passionnés de cryptomonnaies et blockchain',
      isPrivate: false,
      isMember: true
    },
    {
      name: 'IA & Futur',
      members: 892,
      avatar: '🤖',
      description: 'Discussions sur l\'intelligence artificielle',
      isPrivate: false,
      isMember: false
    }
  ]

  const renderForums = () => (
    <div className="space-y-6">
      {/* Forums Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forums.map((forum) => {
          const Icon = forum.icon
          return (
            <div
              key={forum.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-300"
              onClick={() => setSelectedForum(forum)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${forum.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {forum.trending && (
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{forum.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{forum.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {forum.members.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {forum.posts.toLocaleString()}
                  </span>
                </div>
                <span className="text-green-600 font-medium">
                  Actif il y a {forum.lastActivity}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Posts Récents</h3>
          <button
            onClick={() => setShowNewPost(true)}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Nouveau Post</span>
          </button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{post.author.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-bold text-gray-900">{post.author.name}</h4>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {post.author.level}
                    </span>
                    <div className="flex space-x-1">
                      {post.author.badges.map((badge, index) => (
                        <span key={index} className="text-sm">{badge}</span>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">• {post.timeAgo}</span>
                    {post.trending && (
                      <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-semibold">
                        🔥 Trending
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <Reply className="w-4 h-4" />
                        <span className="text-sm">{post.replies}</span>
                      </button>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{post.views}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-500 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Partager</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderLeaderboards = () => (
    <div className="space-y-8">
      {leaderboards.map((leaderboard, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
            {leaderboard.title}
          </h3>
          
          <div className="space-y-4">
            {leaderboard.users.map((user, userIndex) => (
              <div key={userIndex} className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                user.rank <= 3 
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    user.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                    user.rank === 2 ? 'bg-gray-300 text-gray-700' :
                    user.rank === 3 ? 'bg-orange-400 text-orange-900' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="text-2xl">{user.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{user.name}</div>
                    {leaderboard.type === 'individual' && user.streak && (
                      <div className="text-sm text-gray-500 flex items-center">
                        <Flame className="w-3 h-3 text-orange-500 mr-1" />
                        {user.streak} jours
                      </div>
                    )}
                    {leaderboard.type === 'school' && user.members && (
                      <div className="text-sm text-gray-500">
                        {user.members} membres
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-purple-600">{user.kno.toLocaleString()} $KNO</div>
                  {user.rank <= 3 && (
                    <div className="text-xs text-yellow-600 font-semibold">
                      {user.rank === 1 ? '👑 Champion' : user.rank === 2 ? '🥈 Vice-Champion' : '🥉 3ème place'}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const renderChallenges = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{challenge.icon}</div>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                challenge.type === 'weekly' ? 'bg-blue-100 text-blue-700' :
                challenge.type === 'monthly' ? 'bg-purple-100 text-purple-700' :
                'bg-green-100 text-green-700'
              }`}>
                {challenge.type === 'weekly' ? 'Hebdomadaire' : 
                 challenge.type === 'monthly' ? 'Mensuel' : 'Communautaire'}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progression</span>
                <span className="font-semibold">{challenge.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">
                <Users className="w-4 h-4 inline mr-1" />
                {challenge.participants.toLocaleString()} participants
              </div>
              <div className="text-sm text-orange-600 font-semibold">
                <Clock className="w-4 h-4 inline mr-1" />
                {challenge.timeLeft}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-green-600 font-bold">
                +{challenge.reward} $KNO
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-sm">
                Participer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSocial = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Friends */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <UserPlus className="w-5 h-5 mr-2 text-purple-600" />
            Amis ({friends.length})
          </h3>
          <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg hover:bg-purple-200 transition-colors text-sm">
            Ajouter
          </button>
        </div>
        
        <div className="space-y-4">
          {friends.map((friend, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="text-2xl">{friend.avatar}</div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    friend.status === 'online' ? 'bg-green-400' :
                    friend.status === 'learning' ? 'bg-blue-400' :
                    'bg-gray-400'
                  }`}></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{friend.name}</div>
                  {friend.currentCourse && (
                    <div className="text-sm text-gray-500">
                      📚 {friend.currentCourse}
                    </div>
                  )}
                </div>
              </div>
              <button className="text-gray-400 hover:text-purple-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Clubs */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-purple-600" />
            Clubs & Groupes
          </h3>
          <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg hover:bg-purple-200 transition-colors text-sm">
            Créer
          </button>
        </div>
        
        <div className="space-y-4">
          {clubs.map((club, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{club.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center space-x-2">
                      <span>{club.name}</span>
                      {club.isPrivate && <Shield className="w-3 h-3 text-gray-500" />}
                    </div>
                    <div className="text-sm text-gray-500">
                      {club.members} membres
                    </div>
                  </div>
                </div>
                {club.isMember ? (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                    Membre
                  </span>
                ) : (
                  <button className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs hover:bg-purple-600 transition-colors">
                    Rejoindre
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-600">{club.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Communauté</h1>
            <p className="text-xl text-purple-100">
              Forums thématiques, classements et partage de badges. Simple et social !
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'forums', name: 'Forums', icon: MessageCircle },
              { id: 'leaderboards', name: 'Classements', icon: Trophy },
              { id: 'challenges', name: 'Sidequests', icon: Target },
              { id: 'social', name: 'Clubs', icon: Users }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {activeTab === 'forums' && renderForums()}
        {activeTab === 'leaderboards' && renderLeaderboards()}
        {activeTab === 'challenges' && renderChallenges()}
        {activeTab === 'social' && renderSocial()}
      </div>
    </div>
  )
}