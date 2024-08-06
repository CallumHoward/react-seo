import {
  Badge,
  Card,
  FormLabel,
  HStack,
  IconButton,
  IconLabel,
  PriorityLabel,
  SideSheet,
  TabPanel,
  TypeLabel,
  Typography,
  VStack,
} from "@safetyculture/sc-web-ui/react";
import {
  Calendar,
  Clock,
  DotsHorizontal,
  Eye,
  Tag,
} from "@safetyculture/icons-react";
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled(VStack)`
  label {
    width: ${(p) => p.theme._ui.space.s28};
  }
  margin-bottom: ${(p) => p.theme._ui.space.s3};
`;

const Spacer = styled.div`
  display: flex;
  flex-basis: 100%;
`;

export const MySideSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button data-anchor="modal-open" onClick={() => setIsOpen(true)}>
        Open
      </button>
      <SideSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        asOverlay={true}
      >
        <SideSheet.HeaderDefaultLayout
          actionsSlot={
            <IconButton
              rounded
              size="sm"
              ariaLabel="Overflow menu"
              icon={<DotsHorizontal />}
              variation="tertiary"
              onClick={() => {}}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          }
        />
        <SideSheet.BodyDefaultLayout
          contentSlot={
            <TabPanel variant="pill" fill defaultActive="display">
              <TabPanel.Panel name="display" label="Display">
                <Card
                  style={{
                    textAlign: "left",
                    height: "100%",
                    justifyContent: "start",
                  }}
                >
                  <VStack spacing="s4" style={{ height: "100%" }}>
                    <Badge size="small" variant="default">
                      AC-1234
                    </Badge>
                    <VStack spacing="s4">
                      <Typography variant="titleLarge" component="h1">
                        Replenish Safety Helmets, really long title with a few
                        more wordy words.
                      </Typography>
                      <Typography variant="bodySmall" component="p">
                        Ensure stock of helmets are replenished for all sites.
                        Place order through marketplace for fast purchase or
                        contact your admin if amount exceeds your purchasing
                        limit.
                      </Typography>
                    </VStack>
                    <StyledForm component="form" spacing="s3">
                      <HStack>
                        <FormLabel htmlFor="">Prority</FormLabel>
                        <PriorityLabel type="low">Low</PriorityLabel>
                      </HStack>
                      <HStack>
                        <FormLabel htmlFor="">Due date</FormLabel>
                        <IconLabel variant="labelMedium" icon={<Calendar />}>
                          22 Jul 2023 9:41am
                        </IconLabel>
                      </HStack>
                      <HStack>
                        <FormLabel htmlFor="">Repeats</FormLabel>
                        <IconLabel variant="labelMedium" icon={<Clock />}>
                          Daily
                        </IconLabel>
                      </HStack>
                      <HStack>
                        <FormLabel htmlFor="">Label</FormLabel>
                        <IconLabel variant="labelMedium" icon={<Tag />}>
                          Perishable
                        </IconLabel>
                      </HStack>
                    </StyledForm>
                    <VStack spacing="s3">
                      <Typography variant="titleSmall" component="h2">
                        Links
                      </Typography>
                      <Card style={{ textAlign: "left" }}>
                        <VStack>
                          <TypeLabel type="inspection" />
                          <Typography variant="labelLarge">
                            Preventative maintenance
                          </Typography>
                        </VStack>
                      </Card>
                    </VStack>
                    <Spacer />
                    <HStack
                      spacing="s2"
                      color="surface.text.weaker"
                      component={Typography}
                    >
                      <Eye size={18} />
                      <Typography variant="bodyExtraSmall" component="p">
                        Visible to the creator and the assignee
                      </Typography>
                    </HStack>
                  </VStack>
                </Card>
              </TabPanel.Panel>
              <TabPanel.Panel name="email-template" label="Email template">
                <Card style={{ textAlign: "left" }}>
                  <VStack spacing="s4">
                    <Typography variant="titleSmall">
                      Second tab content
                    </Typography>
                    <Typography variant="bodySmall">
                      lorem ipsum dolor sit amet
                    </Typography>
                  </VStack>
                </Card>
              </TabPanel.Panel>
            </TabPanel>
          }
        />
      </SideSheet>
    </>
  );
};
