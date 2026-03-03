import { Flex, View, Heading, Text } from '@adobe/react-spectrum'
import { Zap, Eye, Cpu, ArrowRight } from 'lucide-react'

function HomePage() {
  return (
    <View paddingX="size-400" paddingY="size-800">
      <Flex direction="column" alignItems="center" gap="size-800" maxWidth="size-6000" marginX="auto">

        {/* Hero */}
        <Flex direction="column" alignItems="center" gap="size-200">
          <Heading level={1} UNSAFE_style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.03em', textAlign: 'center', lineHeight: 1.1 }}>
            Negative One Agency
          </Heading>
          <Text UNSAFE_style={{ fontSize: '1.25rem', opacity: 0.7, textAlign: 'center', maxWidth: '600px' }}>
            An AI-native creative agency that designs, builds, and ships — autonomously.
            Nine specialized agents. One unified system. Zero busywork.
          </Text>
        </Flex>

        {/* Capabilities */}
        <Flex wrap gap="size-300" justifyContent="center">
          <CapabilityCard
            icon={<Eye size={24} />}
            title="Strategy & Research"
            description="Market analysis, competitive intelligence, and product strategy — driven by data, refined by taste."
          />
          <CapabilityCard
            icon={<Zap size={24} />}
            title="Creative & Copy"
            description="Brand identity, visual design, and copy that converts — from concept to production-ready assets."
          />
          <CapabilityCard
            icon={<Cpu size={24} />}
            title="Engineering & Deployment"
            description="React, TypeScript, CI/CD, live deployment — code reviewed, tested, and shipped by AI agents."
          />
        </Flex>

        {/* Agent Grid Preview */}
        <Flex direction="column" alignItems="center" gap="size-300">
          <Heading level={2} UNSAFE_style={{ fontSize: '1.5rem', fontWeight: 600 }}>
            The Team
          </Heading>
          <Flex wrap gap="size-200" justifyContent="center">
            {[
              { name: 'Ava', role: 'Director', emoji: '\ud83c\udfaf' },
              { name: 'Noor', role: 'Strategist', emoji: '\ud83d\udcca' },
              { name: 'Marco', role: 'Copywriter', emoji: '\u270d\ufe0f' },
              { name: 'Sable', role: 'Designer', emoji: '\ud83c\udfa8' },
              { name: 'Kit', role: 'Producer', emoji: '\ud83d\udccb' },
              { name: 'Rex', role: 'Tech Lead', emoji: '\ud83d\udd27' },
              { name: 'Kai', role: 'Frontend', emoji: '\ud83d\udda5\ufe0f' },
              { name: 'Nova', role: 'Adobe Platform', emoji: '\ud83d\udd36' },
              { name: 'Jules', role: 'Backend', emoji: '\u2699\ufe0f' },
            ].map((agent) => (
              <View
                key={agent.name}
                padding="size-200"
                borderRadius="medium"
                borderWidth="thin"
                borderColor="dark"
                width="size-1700"
                UNSAFE_style={{ textAlign: 'center' }}
              >
                <Text UNSAFE_style={{ fontSize: '1.5rem' }}>{agent.emoji}</Text>
                <Text UNSAFE_style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem' }}>
                  {agent.name}
                </Text>
                <Text UNSAFE_style={{ display: 'block', fontSize: '0.75rem', opacity: 0.6 }}>
                  {agent.role}
                </Text>
              </View>
            ))}
          </Flex>
        </Flex>

        {/* Status */}
        <View
          padding="size-300"
          borderRadius="medium"
          UNSAFE_style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}
        >
          <Flex alignItems="center" gap="size-100">
            <ArrowRight size={16} style={{ color: '#6366F1' }} />
            <Text UNSAFE_style={{ fontSize: '0.875rem', color: '#818CF8' }}>
              This website was architected, coded, reviewed, and deployed by AI agents. You are looking at the proof.
            </Text>
          </Flex>
        </View>

      </Flex>
    </View>
  )
}

function CapabilityCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <View
      padding="size-300"
      borderRadius="medium"
      borderWidth="thin"
      borderColor="dark"
      width="size-3400"
    >
      <Flex direction="column" gap="size-150">
        <View UNSAFE_style={{ color: '#6366F1' }}>{icon}</View>
        <Heading level={3} UNSAFE_style={{ fontSize: '1.125rem', fontWeight: 600 }}>
          {title}
        </Heading>
        <Text UNSAFE_style={{ fontSize: '0.875rem', opacity: 0.7, lineHeight: 1.6 }}>
          {description}
        </Text>
      </Flex>
    </View>
  )
}

export default HomePage
